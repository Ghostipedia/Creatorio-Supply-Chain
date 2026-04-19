#!/bin/sh
set -eu
MINECRAFT_VERSION={{MINECRAFT_VERSION}}
NEOFORGE_VERSION={{NEOFORGE_VERSION}}
LOADER_TYPE={{LOADER_TYPE}}
# To use a specific Java runtime, set an environment variable named CC_JAVA to the full path of java.exe.
# To disable automatic restarts, set an environment variable named CC_RESTART to false.
# To install the pack without starting the server, set an environment variable named CC_INSTALL_ONLY to true.

if [ "$LOADER_TYPE" = "neoforge" ]; then
    INSTALLER="neoforge-$NEOFORGE_VERSION-installer.jar"
    LOADER_URL="https://maven.neoforged.net/releases/net/neoforged/neoforge/$NEOFORGE_VERSION/neoforge-$NEOFORGE_VERSION-installer.jar"
    LOADER_NAME="NeoForge"
else
    INSTALLER="forge-$MINECRAFT_VERSION-$NEOFORGE_VERSION-installer.jar"
    LOADER_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/$MINECRAFT_VERSION-$NEOFORGE_VERSION/forge-$MINECRAFT_VERSION-$NEOFORGE_VERSION-installer.jar"
    LOADER_NAME="Forge"
fi

pause() {
    printf "%s\n" "Press enter to continue..."
    read ans
}

if ! command -v "${CC_JAVA:-java}" >/dev/null 2>&1; then
    echo "Minecraft $MINECRAFT_VERSION requires Java 21 - Java not found"
    pause
    exit 1
fi

cd "$(dirname "$0")"
if [ ! -d libraries ]; then
    echo "$LOADER_NAME not installed, installing now."
    if [ ! -f "$INSTALLER" ]; then
        echo "No $LOADER_NAME installer found, downloading now."
        if command -v wget >/dev/null 2>&1; then
            echo "DEBUG: (wget) Downloading $LOADER_URL"
            wget -O "$INSTALLER" "$LOADER_URL"
        else
            if command -v curl >/dev/null 2>&1; then
                echo "DEBUG: (curl) Downloading $LOADER_URL"
                curl -o "$INSTALLER" -L "$LOADER_URL"
            else
                echo "Neither wget or curl were found on your system. Please install one and try again"
                pause
                exit 1
            fi
        fi
    fi

    echo "Running $LOADER_NAME installer."
    "${CC_JAVA:-java}" -jar "$INSTALLER" --installServer
fi

if [ ! -e server.properties ]; then
    printf "allow-flight=true\nmotd=Creatorio Supply Chain\nmax-tick-time=180000" > server.properties
fi

if [ "${CC_INSTALL_ONLY:-false}" = "true" ]; then
    echo "INSTALL_ONLY: complete"
    exit 0
fi

JAVA_VERSION=$("${CC_JAVA:-java}" -fullversion 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
if [ ! "$JAVA_VERSION" -ge 21 ]; then
    echo "Minecraft $MINECRAFT_VERSION requires Java 21 - found Java $JAVA_VERSION"
    pause
    exit 1
fi

while true
do
    if [ "$LOADER_TYPE" = "neoforge" ]; then
        "${CC_JAVA:-java}" @user_jvm_args.txt @libraries/net/neoforged/neoforge/$NEOFORGE_VERSION/unix_args.txt nogui
    else
        "${CC_JAVA:-java}" @user_jvm_args.txt @libraries/net/minecraftforge/forge/$MINECRAFT_VERSION-$NEOFORGE_VERSION/unix_args.txt nogui
    fi

    if [ "${CC_RESTART:-true}" = "false" ]; then
        exit 0
    fi

    echo "Restarting automatically in 10 seconds (press Ctrl + C to cancel)"
    sleep 10
done
