@echo off
color 0f
title Commit GIT
cd %userprofile%\Downloads\introducao-javascript-inicial\introducao-javascript
git add -A
git commit -m "Substituindo var por let"
git push -u -f origin master