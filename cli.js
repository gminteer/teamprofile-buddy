#!/usr/bin/env node
const pug = require('pug');
const fs = require('fs');
const getAnswers = require('./test/mockAnswers');

getAnswers()
  .then((locals) => {
    const template = pug.compileFile('./views/index.pug');
    return fs.promises.writeFile('./dist/index.html', template(locals));
  })
  .then(() => console.log('dist/index.html rendered.'))
  .catch((error) => console.error(error));
