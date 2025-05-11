@echo off
echo Fixing dependencies for the HAF project...

echo Installing ajv and ajv-keywords with specific versions...
npm install ajv@8.12.0 ajv-keywords@5.1.0 --legacy-peer-deps

echo Forcing node_modules rebuild...
npm rebuild

echo Dependency fix complete.
echo You can now run "npm start" to start the application.
pause
