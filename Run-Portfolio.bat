@echo off
title Portfolio Local Server
color 0A

echo ===================================================
echo   Kandemari l'Portfolio dyal Youssef f Port 3000...
echo ===================================================
echo.

:: 1. Dkhoul l'dossier dyal l'projet
cd /d "D:\my-portfolio-ym\Video_portfolio-main_elmahmi\Video_portfolio-main"

:: 2. Hll navigateur f port jdid (3000)
start http://localhost:3000

:: 3. Demari serveur f port 3000 (Vite ghadi yqraha)
npm run dev -- --port 3000

pause