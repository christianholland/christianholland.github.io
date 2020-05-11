#!/bin/sh

git add -A
git commit -m "portfolio update"

git push origin master
git push heroku master
