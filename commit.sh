#!/bin/bash

npm run build &&
git commit -am "$1" &&
git push origin master &&
cp -rf ./public/* ../LuizOtav.io/ &&
cp -rf ./build/* ../LuizOtav.io/ &&
#rm -r ./build &&
cd ../LuizOtav.io &&
git commit -am "React prod -> $1" &&
git push origin master &&
cd ../LuizOtav.io_React