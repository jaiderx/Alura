@echo off
color 0f
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 09- AJAX - Capturando Erros de Requisicao"
git push -u -f origin master