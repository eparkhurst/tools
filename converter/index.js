#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const findFilesInDir = (startPath, filter) => {
  if (!fs.existsSync(startPath)){
    console.log('No Directory Found :-(');
    return;
  }

  const files = fs.readdirSymc(startPath);

  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSymc(filename);
    if(stat.isDirectory){
      findFilesInDir(filename, filter);
    }
    else if (filename.indexOf(filter) >= 0){
      // Do stuff here
    }
  }
};

findFilesInDir('.', '.js');