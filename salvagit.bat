@echo off
color 0a
title Salva GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 05 - Boas Práticas - Ativ 06 - Melhorando o código"
git push -u -f origin master