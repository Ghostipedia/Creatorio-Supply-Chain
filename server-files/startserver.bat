@echo off
set MINECRAFT_VERSION={{MINECRAFT_VERSION}}
set NEOFORGE_VERSION={{NEOFORGE_VERSION}}
set LOADER_TYPE={{LOADER_TYPE}}
:: To use a specific Java runtime, set an environment variable named CC_JAVA to the full path of java.exe.
:: To disable automatic restarts, set an environment variable named CC_RESTART to false.
:: To install the pack without starting the server, set an environment variable named CC_INSTALL_ONLY to true.

if "%LOADER_TYPE%"=="neoforge" (
    set INSTALLER="%~dp0neoforge-%NEOFORGE_VERSION%-installer.jar"
    set LOADER_URL="https://maven.neoforged.net/releases/net/neoforged/neoforge/%NEOFORGE_VERSION%/neoforge-%NEOFORGE_VERSION%-installer.jar"
    set LOADER_NAME=NeoForge
) else (
    set INSTALLER="%~dp0forge-%MINECRAFT_VERSION%-%NEOFORGE_VERSION%-installer.jar"
    set LOADER_URL="https://maven.minecraftforge.net/net/minecraftforge/forge/%MINECRAFT_VERSION%-%NEOFORGE_VERSION%/forge-%MINECRAFT_VERSION%-%NEOFORGE_VERSION%-installer.jar"
    set LOADER_NAME=Forge
)

:JAVA
if not defined CC_JAVA (
    set CC_JAVA=java
)

"%CC_JAVA%" -version 1>nul 2>nul || (
   echo Minecraft %MINECRAFT_VERSION% requires Java 21 - Java not found
   pause
   exit /b 1
)

:LOADER
setlocal
cd /D "%~dp0"
if not exist "libraries" (
    echo %LOADER_NAME% not installed, installing now.
    if not exist %INSTALLER% (
        echo No %LOADER_NAME% installer found, downloading from %LOADER_URL%
        bitsadmin.exe /rawreturn /nowrap /transfer loaderinstaller /download /priority FOREGROUND %LOADER_URL% %INSTALLER%
    )
    
    echo Running %LOADER_NAME% installer.
    "%CC_JAVA%" -jar %INSTALLER% --installServer
)

if not exist "server.properties" (
    (
        echo allow-flight=true
        echo motd=Creatorio Supply Chain
        echo max-tick-time=180000
    )> "server.properties"
)

if "%CC_INSTALL_ONLY%" == "true" (
    echo INSTALL_ONLY: complete
    goto:EOF
)

for /f tokens^=2-5^ delims^=.-_^" %%j in ('"%CC_JAVA%" -fullversion 2^>^&1') do set "jver=%%j"
if not %jver% geq 21  (
    echo Minecraft %MINECRAFT_VERSION% requires Java 21 - found Java %jver%
    pause
    exit /b 1
) 

:START
if "%LOADER_TYPE%"=="neoforge" (
    "%CC_JAVA%" @user_jvm_args.txt @libraries/net/neoforged/neoforge/%NEOFORGE_VERSION%/win_args.txt nogui
) else (
    "%CC_JAVA%" @user_jvm_args.txt @libraries/net/minecraftforge/forge/%MINECRAFT_VERSION%-%NEOFORGE_VERSION%/win_args.txt nogui
)

if "%CC_RESTART%" == "false" ( 
    goto:EOF 
)

echo Restarting automatically in 10 seconds (press Ctrl + C to cancel)
timeout /t 10 /nobreak > NUL
goto:START
