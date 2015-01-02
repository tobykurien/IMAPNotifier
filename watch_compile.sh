#!/bin/sh
# Detect changes in .ts file and automatically compile into .js
# requires inoity-tools package: apt-get install inotify-tools
inotifywait -r -m -e close_write "ts/" "sass/"| while read x op f; do
  echo "Compiling $f ..."
  if [ -f "ts/$f" ]; then
    tsc "ts/$f" --module amd --outDir "public/js" && echo "`date`: COMPILED";
  fi

  if [ -f "sass/$f" ]; then
    echo "configure sass compiler for $f"
  fi
done
