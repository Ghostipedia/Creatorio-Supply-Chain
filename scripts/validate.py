#!/usr/bin/env python3
"""
Validation script for Creatorio Supply Chain modpack.

Validates manifest.json structure and required files before building.
"""

import os
import sys
import json


def validate_manifest(manifest_path):
    """
    Validate manifest.json structure and content.
    
    Args:
        manifest_path: Path to manifest.json file
        
    Returns:
        bool: True if valid, False otherwise
    """
    errors = []
    warnings = []
    
    # Check file exists
    if not os.path.exists(manifest_path):
        errors.append(f"manifest.json not found at {manifest_path}")
        return errors, warnings
    
    # Check valid JSON
    try:
        with open(manifest_path, 'r', encoding='utf-8') as f:
            manifest = json.load(f)
    except json.JSONDecodeError as e:
        errors.append(f"manifest.json is not valid JSON: {str(e)}")
        return errors, warnings
    
    # Validate required fields
    if 'name' not in manifest:
        warnings.append("manifest.json missing 'name' field")
    
    if 'version' not in manifest:
        warnings.append("manifest.json missing 'version' field")
    
    if 'author' not in manifest:
        warnings.append("manifest.json missing 'author' field")
    
    if 'files' not in manifest:
        errors.append("manifest.json missing 'files' field")
    elif not isinstance(manifest['files'], list):
        errors.append("manifest.json 'files' field must be an array")
    elif len(manifest['files']) == 0:
        warnings.append("manifest.json has no mods listed in 'files'")
    
    if 'minecraft' not in manifest:
        errors.append("manifest.json missing 'minecraft' field")
    else:
        mc = manifest['minecraft']
        if 'version' not in mc:
            errors.append("manifest.json missing 'minecraft.version' field")
        if 'modLoaders' not in mc:
            errors.append("manifest.json missing 'minecraft.modLoaders' field")
        elif not isinstance(mc['modLoaders'], list):
            errors.append("manifest.json 'minecraft.modLoaders' must be an array")
        elif len(mc['modLoaders']) == 0:
            errors.append("manifest.json has no mod loaders specified")
    
    # Validate file structure
    if 'files' in manifest and isinstance(manifest['files'], list):
        for i, mod in enumerate(manifest['files']):
            if 'projectID' not in mod:
                errors.append(f"Mod at index {i} missing 'projectID' field")
            if 'fileID' not in mod:
                errors.append(f"Mod at index {i} missing 'fileID' field")
            if 'required' not in mod:
                warnings.append(f"Mod at index {i} missing 'required' field (assuming true)")
    
    return errors, warnings


def validate_files(root_dir):
    """
    Validate that required files exist.
    
    Args:
        root_dir: Root directory of the modpack
        
    Returns:
        tuple: (errors, warnings) lists
    """
    errors = []
    warnings = []
    
    # Check for required files
    manifest_path = os.path.join(root_dir, 'manifest.json')
    if not os.path.exists(manifest_path):
        errors.append("manifest.json not found")
    
    # Check for optional but recommended files
    modlist_path = os.path.join(root_dir, 'modlist.html')
    if not os.path.exists(modlist_path):
        warnings.append("modlist.html not found (optional)")
    
    overrides_path = os.path.join(root_dir, 'overrides')
    if not os.path.exists(overrides_path):
        warnings.append("overrides directory not found (optional)")
    elif not os.path.isdir(overrides_path):
        errors.append("overrides exists but is not a directory")
    
    return errors, warnings


def main():
    """Main validation entry point."""
    base_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(base_dir, '..'))
    
    print("=" * 60)
    print("Creatorio Supply Chain - Validation")
    print("=" * 60)
    print()
    
    all_errors = []
    all_warnings = []
    
    # Validate files
    print("Checking required files...")
    errors, warnings = validate_files(root_dir)
    all_errors.extend(errors)
    all_warnings.extend(warnings)
    
    # Validate manifest
    print("Validating manifest.json...")
    manifest_path = os.path.join(root_dir, 'manifest.json')
    errors, warnings = validate_manifest(manifest_path)
    all_errors.extend(errors)
    all_warnings.extend(warnings)
    
    print()
    
    # Report results
    if all_warnings:
        print("⚠ Warnings:")
        for warning in all_warnings:
            print(f"  - {warning}")
        print()
    
    if all_errors:
        print("✗ Validation FAILED with errors:")
        for error in all_errors:
            print(f"  - {error}")
        print()
        print("=" * 60)
        return 1
    
    print("✓ Validation passed!")
    if all_warnings:
        print(f"  ({len(all_warnings)} warning(s))")
    print("=" * 60)
    return 0


if __name__ == "__main__":
    sys.exit(main())
