@echo off
color 0a
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 07 - Remocao, delegacao e animacao - Ativ 03 - Animando a remocao dos pacientes"
git push -u -f origin master