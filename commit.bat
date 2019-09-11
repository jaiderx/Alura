@echo off
color 0f
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Alteracao cor das linhas com erro"
git push -u -f origin master