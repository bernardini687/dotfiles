#!/bin/bash

for dir in *; do
  if [ -d $dir ]; then
    cd $dir
    for config in *; do
      if [ -f $config ]; then
        target=$HOME/.$config
        if [ -f $target ]; then
          echo "  [X] - $target -> already linked!"
        else
          echo "  [.] - $target -> creating link..."
          ln -s $PWD/$config $target
        fi
      fi
    done
    cd ..
  fi
done
