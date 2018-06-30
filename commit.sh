#!/bin/bash

cd src/resume &&
resume export resume.html &&
mv resume.html ../../public/resume.html &&
cd ../.. &&
npm run build &&
git add -A . &&
git commit -am "$1" &&
git push origin master &&
cp -rf ./build/* ../LuizOtav.io/ &&
rm -r ./build &&
cd ../LuizOtav.io &&
git pull &&
git add -A . &&
git commit -am "React prod -> $1" &&
git push origin master &&
cd ../LuizOtav.io_React
