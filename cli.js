#!/usr/bin/env node
app = require('./lib/app');

app.getAnswers().then(console.log);
