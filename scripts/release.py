# release.py

import os
import sys
from pack_generation import generate_modpack_zip
from server_generation import generate_serverpack_zip

def main():
    """
    Main release script entry point.
    
    Environment variables:
        RELEASE_VERSION: Version tag for the release
        IS_PRERELEASE: Whether this is a pre-release (true/false)
        CURSEFORGE_API_KEY: CurseForge API key for downloading server mods
    """
    try:
        version = os.environ.get('RELEASE_VERSION')
        is_prerelease = os.environ.get('IS_PRERELEASE', 'false').lower() == 'true'
        curseforge_api_key = os.environ.get('CURSEFORGE_API_KEY')
        
        if not version:
            raise RuntimeError("ERROR: RELEASE_VERSION environment variable is required")
        
        print("=" * 60)
        print(f"Creatorio Supply Chain Release Builder")
        print(f"Version: {version}")
        print(f"Pre-release: {is_prerelease}")
        print("=" * 60)
        print()
        
        generated_files = []
        
        # Generate client modpack
        print("Building client modpack...")
        print("-" * 60)
        client_zip = generate_modpack_zip(version)
        generated_files.append(client_zip)
        print()
        
        # Generate server pack (only for non-prereleases)
        if not is_prerelease:
            print("Building server pack...")
            print("-" * 60)
            server_zip = generate_serverpack_zip(version, curseforge_api_key=curseforge_api_key)
            generated_files.append(server_zip)
            print()
        else:
            print("Skipping server pack generation for pre-release")
            print()
        
        print("=" * 60)
        print("✓ Release build completed successfully!")
        for file in generated_files:
            print(f"  - {file}")
        print("=" * 60)
        
        return 0
        
    except Exception as e:
        print()
        print("=" * 60)
        print("✗ Release build FAILED!")
        print(f"  Error: {str(e)}")
        print("=" * 60)
        import traceback
        traceback.print_exc()
        return 1

if __name__ == "__main__":
    sys.exit(main())
