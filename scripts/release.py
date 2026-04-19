# release.py

import os
import sys
from pack_generation import generate_modpack_zip

def main():
    """
    Main release script entry point.
    
    Environment variables:
        RELEASE_VERSION: Version tag for the release
        IS_PRERELEASE: Whether this is a pre-release (true/false)
    """
    try:
        version = os.environ.get('RELEASE_VERSION')
        is_prerelease = os.environ.get('IS_PRERELEASE', 'false').lower() == 'true'
        
        if not version:
            raise RuntimeError("ERROR: RELEASE_VERSION environment variable is required")
        
        print("=" * 60)
        print(f"Creatorio Supply Chain Release Builder")
        print(f"Version: {version}")
        print(f"Pre-release: {is_prerelease}")
        print("=" * 60)
        print()
        
        # Generate modpack
        zip_path = generate_modpack_zip(version)
        
        print()
        print("=" * 60)
        print("✓ Release build completed successfully!")
        print(f"  Generated: {zip_path}")
        print("=" * 60)
        
        return 0
        
    except Exception as e:
        print()
        print("=" * 60)
        print("✗ Release build FAILED!")
        print(f"  Error: {str(e)}")
        print("=" * 60)
        return 1

if __name__ == "__main__":
    sys.exit(main())
