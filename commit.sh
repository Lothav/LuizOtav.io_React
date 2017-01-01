#!/bin/bash

npm run build &&
git commit -am "$1" &&
git push origin master &&

mv -f ./build/* ../LuizOtav.io/ &&
rm -r ./build &&

cd ../LuizOtav.io &&
git commit -am "React prod -> $1" &&
git push origin master &&
cd ../LuizOtav.io_React