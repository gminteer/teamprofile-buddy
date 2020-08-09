#!/usr/bin/env node
const pug = require('pug');
const fs = require('fs');
const getAnswers = process.env.MOCK_INQUIRER === 'yes' ? require('./test/mockAnswers') : require('./lib/getAnswers');

getAnswers()
  .then((locals) => {
    const template = pug.compileFile('./src/views/index.pug');
    return fs.promises.writeFile('./dist/index.html', template(locals));
  })
  .then(() => console.log('Site rendered to dist/'))
  .catch((error) => console.error(error));
