@echo off
echo Checking if installation is needed...

IF NOT EXIST node_modules (
  echo Installing dependencies for Hyperdimensional Automata Framework...
  call clean-install.bat
) ELSE (
  echo Dependencies already installed.
)

echo Starting Hyperdimensional Automata Framework...
npm start
