@echo off
echo Cleaning up the HAF project installation...

echo Removing node_modules folder if it exists...
IF EXIST node_modules rmdir /s /q node_modules

echo Removing package-lock.json if it exists...
IF EXIST package-lock.json del /f package-lock.json

echo Clearing npm cache...
npm cache clean --force

echo Installing dependencies with clean slate...
npm install --legacy-peer-deps

echo Installation complete!
pause
