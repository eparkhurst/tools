#!/usr/bin/env node

const fs = require('fs');
const componentGenerator = require('./componentTemplate');
const indexGenerator = require('./indexTemplate');


const CURR_DIR = process.cwd();

const componentName = process.argv[2];

fs.mkdirSync(`${CURR_DIR}/${componentName}`);

const makeComponent = (name) => {
  const content = componentGenerator(name);
  fs.writeFileSync(`${CURR_DIR}/${name}/${name}.js`, content, 'utf8');

  const indexFile = indexGenerator(name);
  fs.writeFileSync(`${CURR_DIR}/${name}/index.js`, indexFile, 'utf8');
};

makeComponent(componentName);