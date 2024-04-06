@echo off

:repeat
echo ===================
echo START NEW GIT PUSH
echo ===================
set /p git_link="Enter the GitHub repository URL: "
set /p lnk="Enter Link to Files: "

cd %lnk%

git init
git add .
git commit -m "#1"
git branch -M main
git remote add origin %git_link%

echo ===============
echo Processing...
echo ===============

git push -u origin main

if %errorlevel% equ 0 (
    echo Done!
) else (
    echo Failed!
)
echo =======
echo PUSHED.
echo =======
pause

goto repeat