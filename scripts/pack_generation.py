import os
import shutil
import zipfile
import sys
from utils import copy_any

MODPACK_DIRECTORY = "modpack"


def generate_modpack_zip(version=None):
    """
    Generate a modpack zip file from the project files.
    
    Args:
        version: Version string to include in the zip filename
        
    Returns:
        str: Path to the generated zip file
        
    Raises:
        RuntimeError: If required files are missing or build fails
    """
    try:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        root_dir = os.path.abspath(os.path.join(base_dir, '..'))
        modpack_dir = os.path.join(root_dir, MODPACK_DIRECTORY)

        print(f"Building modpack version: {version or 'unversioned'}")
        
        # Validate required files exist
        manifest_src = os.path.join(root_dir, 'manifest.json')
        if not os.path.exists(manifest_src):
            raise RuntimeError(f"ERROR: manifest.json not found at {manifest_src}")
        
        modlist_src = os.path.join(root_dir, 'modlist.html')
        if not os.path.exists(modlist_src):
            print(f"WARNING: modlist.html not found at {modlist_src}, skipping...")
        
        overrides_src = os.path.join(root_dir, 'overrides')
        if not os.path.exists(overrides_src):
            print(f"WARNING: overrides directory not found at {overrides_src}, skipping...")

        # Clean up previous modpack dir if exists
        if os.path.exists(modpack_dir):
            print(f"Cleaning up previous build at {modpack_dir}")
            shutil.rmtree(modpack_dir)
        os.makedirs(modpack_dir)

        # Copy overrides
        overrides_dst = os.path.join(modpack_dir, 'overrides')
        if os.path.exists(overrides_src):
            print(f"Copying overrides from {overrides_src}")
            copy_any(overrides_src, overrides_dst)

        # Copy manifest.json
        print(f"Copying manifest.json")
        copy_any(manifest_src, modpack_dir)

        # Copy modlist.html
        if os.path.exists(modlist_src):
            print(f"Copying modlist.html")
            copy_any(modlist_src, modpack_dir)

        # Zip the directory (only include the contents, not the root folder)
        zip_name = f'Creatorio.Supply.Chain.{version}.zip' if version else f'Creatorio.Supply.Chain.zip'
        zip_path = os.path.join(root_dir, zip_name)
        
        print(f"Creating zip file at {zip_path}")
        file_count = 0
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(modpack_dir):
                for file in files:
                    abs_path = os.path.join(root, file)
                    rel_path = os.path.relpath(abs_path, modpack_dir)
                    zipf.write(abs_path, rel_path)
                    file_count += 1
        
        # Verify zip was created and has content
        if not os.path.exists(zip_path):
            raise RuntimeError(f"ERROR: Failed to create zip file at {zip_path}")
        
        zip_size = os.path.getsize(zip_path)
        if zip_size == 0:
            raise RuntimeError(f"ERROR: Generated zip file is empty")
        
        print(f'✓ Modpack successfully created at: {zip_path}')
        print(f'  - Files: {file_count}')
        print(f'  - Size: {zip_size / 1024 / 1024:.2f} MB')
        
        return zip_path
        
    except Exception as e:
        print(f"ERROR: Failed to generate modpack: {str(e)}", file=sys.stderr)
        raise
