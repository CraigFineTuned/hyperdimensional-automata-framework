@echo off
echo Uploading HAF to GitHub...

REM Check if Git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
  echo Git is not installed. Please install Git from https://git-scm.com/downloads
  pause
  exit /b
)

REM Initialize Git if not already initialized
if not exist .git (
  echo Initializing Git repository...
  git init
) else (
  echo Git repository already initialized.
)

REM Add all files
echo Adding files to Git...
git add .

REM Commit
echo Creating initial commit...
git commit -m "Initial commit: Hyperdimensional Automata Framework by CrAigFineTuned"

REM Prompt for GitHub username
set /p username=Enter your GitHub username: 

REM Prompt for repository name
set /p reponame=Enter repository name (default: hyperdimensional-automata-framework): 
if "%reponame%"=="" set reponame=hyperdimensional-automata-framework

REM Set remote origin
echo Setting up remote origin...
git remote add origin https://github.com/%username%/%reponame%.git

REM Push to GitHub
echo Pushing to GitHub...
git branch -M main
git push -u origin main

REM Check for errors
if %errorlevel% neq 0 (
  echo Failed to push to GitHub. Make sure:
  echo 1. You have created the repository on GitHub
  echo 2. Your GitHub username is correct
  echo 3. You have appropriate permissions
  echo.
  echo Manual GitHub repository creation steps:
  echo 1. Go to https://github.com/new
  echo 2. Name your repository: %reponame%
  echo 3. Make it Public or Private
  echo 4. Do NOT initialize with README, .gitignore, or license
  echo 5. Click "Create repository"
  echo.
  echo Then try running this script again.
) else (
  echo Successfully uploaded HAF to GitHub!
  echo Repository URL: https://github.com/%username%/%reponame%
)

pause
