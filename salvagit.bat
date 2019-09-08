@echo off
color 0a
title Salva GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 05 - Boas Praticas - Ativ 06 - Melhorando o codigo"
git push -u -f origin master