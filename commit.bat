@echo off
color 0f
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Aula 08 - Filtrando uma tabela - Filtrando com expressao regular"
git push -u -f origin master