@echo off
color 0f
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Classificacoes adicionadas"
git push -u -f origin master