#!/bin/bash

# Scans .md files in src to see whether they are complete or not

working=${PWD}

#for dir in src/*; do
#  for dir in ${PWD}/*, do
#    for dir in ${PWD}/* do
      for file in src/ja/2017-03/01/*.md

      # ">>" redirection appends output to file, ">" overwrites existing file w/ output
      do wc -l "$file"


      done >results.out
#    done
#  done
#done
exit
