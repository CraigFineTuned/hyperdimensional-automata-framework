@echo off
echo Creating a fresh React project for HAF...

echo Creating a new folder for the fresh project...
mkdir ..\HAF-Fresh

echo Creating a new React app with Create React App...
npx create-react-app ..\HAF-Fresh

echo Installing Tailwind CSS and other dependencies...
cd ..\HAF-Fresh
npm install tailwindcss@3.3.3 postcss@8.4.31 autoprefixer@10.4.16 --legacy-peer-deps

echo Initializing Tailwind CSS...
npx tailwindcss init -p

echo Preparing to copy files from the original project...
mkdir src\components
mkdir src\components\ui
mkdir src\components\ui\sections
mkdir src\components\simulations
mkdir src\core
mkdir src\core\automata
mkdir src\core\dimensions
mkdir src\core\rules
mkdir src\utils

echo Setting up Tailwind CSS...
echo /** @type {import('tailwindcss').Config} */ > tailwind.config.js
echo module.exports = { >> tailwind.config.js
echo   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], >> tailwind.config.js
echo   theme: { >> tailwind.config.js
echo     extend: { >> tailwind.config.js
echo       colors: { >> tailwind.config.js
echo         gray: { >> tailwind.config.js
echo           900: '#111827', >> tailwind.config.js
echo           800: '#1f2937', >> tailwind.config.js
echo           700: '#374151', >> tailwind.config.js
echo           600: '#4b5563', >> tailwind.config.js
echo           500: '#6b7280', >> tailwind.config.js
echo           400: '#9ca3af', >> tailwind.config.js
echo           300: '#d1d5db', >> tailwind.config.js
echo         }, >> tailwind.config.js
echo         purple: { >> tailwind.config.js
echo           400: '#a78bfa', >> tailwind.config.js
echo           500: '#8b5cf6', >> tailwind.config.js
echo           600: '#7c3aed', >> tailwind.config.js
echo         }, >> tailwind.config.js
echo         pink: { >> tailwind.config.js
echo           400: '#f472b6', >> tailwind.config.js
echo           500: '#ec4899', >> tailwind.config.js
echo           600: '#db2777', >> tailwind.config.js
echo         }, >> tailwind.config.js
echo         green: { >> tailwind.config.js
echo           500: '#10b981', >> tailwind.config.js
echo           600: '#059669', >> tailwind.config.js
echo         }, >> tailwind.config.js
echo         teal: { >> tailwind.config.js
echo           500: '#14b8a6', >> tailwind.config.js
echo           600: '#0d9488', >> tailwind.config.js
echo         }, >> tailwind.config.js
echo         rose: { >> tailwind.config.js
echo           500: '#f43f5e', >> tailwind.config.js
echo           600: '#e11d48', >> tailwind.config.js
echo         } >> tailwind.config.js
echo       }, >> tailwind.config.js
echo       fontFamily: { >> tailwind.config.js
echo         sans: ['Inter', 'sans-serif'] >> tailwind.config.js
echo       }, >> tailwind.config.js
echo       backgroundImage: { >> tailwind.config.js
echo         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', >> tailwind.config.js
echo         'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))', >> tailwind.config.js
echo       }, >> tailwind.config.js
echo       animation: { >> tailwind.config.js
echo         'fade-in': 'fadeIn 0.5s ease-in-out', >> tailwind.config.js
echo         'slide-up': 'slideUp 0.5s ease-in-out', >> tailwind.config.js
echo         'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' >> tailwind.config.js
echo       }, >> tailwind.config.js
echo       keyframes: { >> tailwind.config.js
echo         fadeIn: { >> tailwind.config.js
echo           from: { opacity: 0 }, >> tailwind.config.js
echo           to: { opacity: 1 } >> tailwind.config.js
echo         }, >> tailwind.config.js
echo         slideUp: { >> tailwind.config.js
echo           from: { transform: 'translateY(20px)', opacity: 0 }, >> tailwind.config.js
echo           to: { transform: 'translateY(0)', opacity: 1 } >> tailwind.config.js
echo         } >> tailwind.config.js
echo       }, >> tailwind.config.js
echo       boxShadow: { >> tailwind.config.js
echo         'glow': '0 0 10px rgba(102, 126, 234, 0.3)', >> tailwind.config.js
echo         'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' >> tailwind.config.js
echo       } >> tailwind.config.js
echo     }, >> tailwind.config.js
echo   }, >> tailwind.config.js
echo   plugins: [], >> tailwind.config.js
echo } >> tailwind.config.js

echo Setting up index.css...
echo @tailwind base; > src\index.css
echo @tailwind components; >> src\index.css
echo @tailwind utilities; >> src\index.css
echo. >> src\index.css
echo @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'); >> src\index.css
echo. >> src\index.css
echo body { >> src\index.css
echo   margin: 0; >> src\index.css
echo   font-family: 'Inter', sans-serif; >> src\index.css
echo   -webkit-font-smoothing: antialiased; >> src\index.css
echo   -moz-osx-font-smoothing: grayscale; >> src\index.css
echo   background: linear-gradient(135deg, #0f0c29 0%%, #302b63 50%%, #24243e 100%%); >> src\index.css
echo   min-height: 100vh; >> src\index.css
echo   overflow-x: hidden; >> src\index.css
echo   position: relative; >> src\index.css
echo } >> src\index.css

echo Creating start script...
echo @echo off > start.bat
echo echo Starting Hyperdimensional Automata Framework... >> start.bat
echo npm start >> start.bat

echo Fresh setup complete!
echo Now you need to manually copy your source files from:
echo C:\Users\craig\Desktop\MainProjects\HAF\src
echo to:
echo C:\Users\craig\Desktop\MainProjects\HAF-Fresh\src
echo.
echo After copying, you can start the application by running "npm start" in the HAF-Fresh directory.
pause
