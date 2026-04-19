import requests

MODRINTH_API_URL = 'https://api.modrinth.com/v2'
USER_AGENT = 'Ghostipedia/Creatorio-Supply-Chain (github.com/Ghostipedia/Creatorio-Supply-Chain)'


def _headers():
    return {
        'Accept': 'application/json',
        'User-Agent': USER_AGENT,
    }


def get_project_versions(slug):
    resp = requests.get(f"{MODRINTH_API_URL}/project/{slug}/version", headers=_headers())
    if resp.status_code != 200:
        return []
    return resp.json()


def get_download_url(slug, mc_version, loader):
    for v in get_project_versions(slug):
        if mc_version not in v.get('game_versions', []):
            continue
        if loader not in v.get('loaders', []):
            continue
        files = v.get('files', [])
        if not files:
            continue
        primary = next((f for f in files if f.get('primary')), files[0])
        return primary.get('url')
    return None
