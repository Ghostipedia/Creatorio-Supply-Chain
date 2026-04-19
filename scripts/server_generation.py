import os
import shutil
import zipfile
import json
import sys
from bs4 import BeautifulSoup

sys.path.append(os.path.dirname(__file__))

from utils import copy_any, load_json, save_json
from curse_client import get_mod_website_url, get_mod_download_url, get_api_key, get_headers

SERVERPACK_DIRECTORY = "serverpack"
MAX_CONCURRENT_DOWNLOADS = 8

def generate_serverpack_zip(version=None, curseforge_api_key=None):
    """
    Generate a server pack zip file from the project files.
    
    Args:
        version: Version string to include in the zip filename
        curseforge_api_key: CurseForge API key for downloading mods
        
    Returns:
        str: Path to the generated zip file
        
    Raises:
        RuntimeError: If required files are missing or build fails
    """
    try:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        root_dir = os.path.abspath(os.path.join(base_dir, '..'))
        serverpack_dir = os.path.join(root_dir, SERVERPACK_DIRECTORY)

        print(f"Building server pack version: {version or 'unversioned'}")

        # Clean up previous serverpack dir if exists
        if os.path.exists(serverpack_dir):
            print(f"Cleaning up previous server build at {serverpack_dir}")
            shutil.rmtree(serverpack_dir)
        os.makedirs(serverpack_dir)

        # Copy overrides (copy content, not the folder itself)
        overrides_src = os.path.join(root_dir, 'overrides')
        if os.path.exists(overrides_src):
            print(f"Copying overrides from {overrides_src}")
            for item in os.listdir(overrides_src):
                s = os.path.join(overrides_src, item)
                d = os.path.join(serverpack_dir, item)
                copy_any(s, d)

        # Copy server-files content into serverpack directory
        server_files_src = os.path.join(root_dir, 'server-files')
        if os.path.exists(server_files_src):
            print(f"Copying server files from {server_files_src}")
            for item in os.listdir(server_files_src):
                s = os.path.join(server_files_src, item)
                d = os.path.join(serverpack_dir, item)
                copy_any(s, d)
        else:
            print(f"WARNING: No server-files directory found at {server_files_src}")

        # Copy manifest.json (if needed for serverpack)
        print("Generating filtered manifest.json for server")
        generate_filtered_manifest(root_dir, serverpack_dir)

        # Generate filtered modlist.html for serverpack
        print("Generating filtered modlist.html for server")
        generate_filtered_modlist(root_dir, serverpack_dir)

        # Replace MINECRAFT_VERSION and FORGE_VERSION in startserver.bat and startserver.sh
        print("Updating server startup scripts with version info")
        update_server_scripts_with_versions(serverpack_dir)

        # Download mods from CurseForge API
        print("Downloading mods from CurseForge...")
        download_mods_from_curseforge(serverpack_dir, curseforge_api_key=curseforge_api_key)

        # Append manual download links to README
        print("Updating README with manual download links")
        readme_update(root_dir, serverpack_dir)

        # Zip the directory (only include the contents, not the root folder)
        zip_name = f'Creatorio.Supply.Chain.Server.{version}.zip' if version else f'Creatorio.Supply.Chain.Server.zip'
        zip_path = os.path.join(root_dir, zip_name)
        
        print(f"Creating server zip file at {zip_path}")
        file_count = 0
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(serverpack_dir):
                for file in files:
                    abs_path = os.path.join(root, file)
                    rel_path = os.path.relpath(abs_path, serverpack_dir)
                    zipf.write(abs_path, rel_path)
                    file_count += 1
        
        # Verify zip was created and has content
        if not os.path.exists(zip_path):
            raise RuntimeError(f"ERROR: Failed to create server zip file at {zip_path}")
        
        zip_size = os.path.getsize(zip_path)
        if zip_size == 0:
            raise RuntimeError(f"ERROR: Generated server zip file is empty")
        
        print(f'✓ Server pack successfully created at: {zip_path}')
        print(f'  - Files: {file_count}')
        print(f'  - Size: {zip_size / 1024 / 1024:.2f} MB')
        
        return zip_path
        
    except Exception as e:
        print(f"ERROR: Failed to generate server pack: {str(e)}", file=sys.stderr)
        raise


def generate_filtered_modlist(root_dir, serverpack_dir):
    modlist_path = os.path.join(root_dir, 'modlist.html')
    config_path = os.path.join(root_dir, 'server-mods-config.json')
    output_path = os.path.join(serverpack_dir, 'modlist.html')

    if not os.path.exists(modlist_path):
        print(f"WARNING: modlist.html not found at {modlist_path}, skipping...")
        return

    config = load_json(config_path)
    blacklist_ids = {str(entry['id']) for entry in config.get('blacklist', [])}
    server_only_mods = config.get('server_only', [])

    with open(modlist_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    filtered_lis = []
    for li in soup.find_all('li'):
        a = li.find('a', href=True)
        if a and any(black_id in a['href'] for black_id in blacklist_ids):
            continue
        filtered_lis.append(li)

    # Add server-only mods to modlist
    for mod in server_only_mods:
        mod_url = get_mod_website_url(mod['id'])
        if mod_url:
            new_li = soup.new_tag('li')
            a_tag = soup.new_tag('a', href=mod_url)
            a_tag.string = mod['name']
            new_li.append(a_tag)
            filtered_lis.append(new_li)

    new_soup = BeautifulSoup('<ul></ul>', 'html.parser')
    ul = new_soup.ul
    for li in filtered_lis:
        ul.append(li)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(str(new_soup))
    print(f'Filtered modlist.html generated at: {output_path}')


def generate_filtered_manifest(root_dir, serverpack_dir):
    manifest_path = os.path.join(root_dir, 'manifest.json')
    config_path = os.path.join(root_dir, 'server-mods-config.json')
    output_path = os.path.join(serverpack_dir, 'manifest.json')

    config = load_json(config_path)
    blacklist_ids = {str(entry['id']) for entry in config.get('blacklist', [])}
    manifest = load_json(manifest_path)

    # Add server-only mods to manifest
    server_only_mods = config.get('server_only', [])
    if 'files' in manifest and isinstance(manifest['files'], list):
        filtered_files = [obj for obj in manifest['files'] if str(obj.get('projectID')) not in blacklist_ids]
        # Add server-only mods if not already present
        server_only_ids = {mod['id'] for mod in server_only_mods}
        present_ids = {obj.get('projectID') for obj in filtered_files}
        for mod in server_only_mods:
            if mod['id'] not in present_ids:
                filtered_files.append({
                    'projectID': mod['id'],
                    'fileID': mod['file_id'],
                    'required': True
                })
        manifest['files'] = filtered_files

    save_json(manifest, output_path)
    print(f'Filtered manifest.json generated at: {output_path}')


def update_server_scripts_with_versions(serverpack_dir):
    import re
    manifest_path = os.path.join(serverpack_dir, 'manifest.json')
    
    if not os.path.exists(manifest_path):
        print(f"WARNING: manifest.json not found at {manifest_path}, cannot update server scripts")
        return
    
    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)
    # Parse Minecraft version
    mc_version = manifest.get('minecraft', {}).get('version', None)
    # Parse Forge version (modLoaders is a list of dicts with id like 'forge-47.2.20')
    forge_version = None
    for loader in manifest.get('minecraft', {}).get('modLoaders', []):
        if loader.get('id', '').startswith('forge-'):
            forge_version = loader['id'].split('-')[1]
            break

    # Replace in startserver.bat
    bat_path = os.path.join(serverpack_dir, 'startserver.bat')
    if os.path.exists(bat_path):
        with open(bat_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if mc_version:
            content = re.sub(r'set MINECRAFT_VERSION=\{\{MINECRAFT_VERSION\}\}', f'set MINECRAFT_VERSION={mc_version}', content)
        if forge_version:
            content = re.sub(r'set FORGE_VERSION=\{\{FORGE_VERSION\}\}', f'set FORGE_VERSION={forge_version}', content)
        with open(bat_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # Replace in startserver.sh
    sh_path = os.path.join(serverpack_dir, 'startserver.sh')
    if os.path.exists(sh_path):
        with open(sh_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if mc_version:
            content = re.sub(r'MINECRAFT_VERSION=\{\{MINECRAFT_VERSION\}\}', f'MINECRAFT_VERSION={mc_version}', content)
        if forge_version:
            content = re.sub(r'FORGE_VERSION=\{\{FORGE_VERSION\}\}', f'FORGE_VERSION={forge_version}', content)
        with open(sh_path, 'w', encoding='utf-8') as f:
            f.write(content)


def download_mods_from_curseforge(serverpack_dir, curseforge_api_key=None):
    from concurrent.futures import ThreadPoolExecutor, as_completed
    import requests
    # Use the passed API key instead of the one from the environment
    api_key = curseforge_api_key or os.environ.get('CURSEFORGE_API_KEY')
    if not api_key:
        raise RuntimeError('CURSEFORGE_API_KEY must be provided.')
    mods_dir = os.path.join(serverpack_dir, 'mods')
    os.makedirs(mods_dir, exist_ok=True)
    manifest_path = os.path.join(serverpack_dir, 'manifest.json')
    config_path = os.path.join(os.path.dirname(serverpack_dir), 'server-mods-config.json')
    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)
    files = manifest.get('files', [])
    config = load_json(config_path)
    manual_download_ids = {mod['id'] for mod in config.get('manual_download', [])}
    server_only_mods = {mod['id']: mod for mod in config.get('server_only', [])}

    def download_mod(mod):
        project_id = mod.get('projectID')
        file_id = mod.get('fileID')
        # Skip mods that are not required
        if not mod.get('required', True):
            print(f"Skipping optional mod {project_id} (required: false)")
            return
        # Skip mods that are in the manual download section
        if project_id in manual_download_ids:
            print(f"Skipping manual download mod {project_id}")
            return
        # Only download server-only mods if they are in the config or regular mods
        if project_id in server_only_mods:
            file_id = server_only_mods[project_id]['fileID']
        if not project_id or not file_id:
            raise RuntimeError(f"ERROR: Failed to parse project id or file id for mod '{mod}'")
        # Use the passed API key
        file_url = get_mod_download_url(project_id, file_id, api_key=api_key)
        if not file_url:
            raise RuntimeError(f"ERROR: No download url found for mod {project_id} {file_id}")
        print(f"\tDownloading {file_url}")
        mod_resp = requests.get(file_url, stream=True)
        if mod_resp.status_code == 200:
            filename = file_url.split('/')[-1]
            out_path = os.path.join(mods_dir, filename)
            with open(out_path, 'wb') as out_file:
                for chunk in mod_resp.iter_content(chunk_size=8192):
                    out_file.write(chunk)
        else:
            raise RuntimeError(f"ERROR: Failed to download mod {project_id} {file_id}")

    max_workers = min(MAX_CONCURRENT_DOWNLOADS, len(files))
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = [executor.submit(download_mod, mod) for mod in files]
        for future in as_completed(futures):
            future.result()


def readme_update(root_dir, serverpack_dir):
    config_path = os.path.join(root_dir, 'server-mods-config.json')
    manifest_path = os.path.join(serverpack_dir, 'manifest.json')
    readme_path = os.path.join(serverpack_dir, 'README.md')
    
    if not os.path.exists(readme_path):
        print(f"WARNING: README.md not found at {readme_path}, skipping update...")
        return
    
    config = load_json(config_path)
    manual_download_mods = config.get('manual_download', [])
    server_only_mods = config.get('server_only', [])
    with open(manifest_path, 'r', encoding='utf-8') as f:
        manifest = json.load(f)
    root_manifest_path = os.path.join(root_dir, 'manifest.json')
    with open(root_manifest_path, 'r', encoding='utf-8') as f:
        root_manifest = json.load(f)
    root_mod_ids = {f['projectID'] for f in root_manifest.get('files', [])}
    files = manifest.get('files', [])
    manual_links = []
    for mod in manual_download_mods:
        mod_id = mod['id']
        if mod_id not in root_mod_ids:
            continue
        file_id = None
        for f in files:
            if f.get('projectID') == mod_id:
                file_id = f.get('fileID')
                break
        if not file_id:
            continue
        mod_url = get_mod_website_url(mod_id)
        if not mod_url:
            continue
        file_url = f"{mod_url}/download/{file_id}"
        manual_links.append(f"- {file_url}\n")
    optional_links = []
    for f in files:
        if not f.get('required', True):
            mod_id = f.get('projectID')
            file_id = f.get('fileID')
            mod_url = get_mod_website_url(mod_id)
            if not mod_url:
                continue
            file_url = f"{mod_url}/download/{file_id}"
            optional_links.append(f"- {file_url}\n")
    server_only_links = []
    for mod in server_only_mods:
        mod_url = get_mod_website_url(mod['id'])
        if not mod_url:
            continue
        server_only_links.append(f"- {mod['name']}: {mod_url}\n")
    with open(readme_path, 'a', encoding='utf-8') as readme:
        if manual_links:
            readme.write('\n## Manual Downloads\n')
            readme.writelines(manual_links)
        if optional_links:
            readme.write('\n## Optional Mods\n')
            readme.writelines(optional_links)
        if server_only_links:
            readme.write('\n## Server Only Mods\n')
            readme.writelines(server_only_links)
    print(f'README.md updated at: {readme_path}')
