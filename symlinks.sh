#!/bin/bash
for dir in *; do
  if [ -d "$dir" ]; then
    cd $dir
    for config in *; do
      if [ -f "$config" ]; then
        target="$HOME/.$config"
        echo "--- Symlinking $target"
        ln -s "$PWD/$config" $target
      fi
    done
    cd ..
  fi
done
