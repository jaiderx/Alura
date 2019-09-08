@echo off
color 0a
title Salva GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 06 - Validacao de formularios - Ativ 01 - Validando os dados do formulario"
git push -u -f origin master