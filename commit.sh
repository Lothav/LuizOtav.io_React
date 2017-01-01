#!/bin/bash

npm run build &&
git commit -am "$1" &&
git push origin master &&

mv -f ./build/* ../LuizOtav.io_React/ &&
rm -r ./build &&

cd ../LuizOtav.io_React &&
git commit -am "React prod -> $1" &&
git push origin master &&
cd ../LuizOtav.io_React