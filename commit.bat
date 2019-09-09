@echo off
color 0a
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 06 - Validacao de formularios - Ativ 03 - Validando o restante dos campos"
git push -u -f origin master