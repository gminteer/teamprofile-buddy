#!/usr/bin/env node
const teamprofileBuddy = require('../index');
function logMe(err, stats) {
  if (err) return console.error(err);
  console.log(stats.toString('normal'));
}

if (process.env.NODE_ENV === 'production') {
  teamprofileBuddy.getAnswers().then(
    (answers) => teamprofileBuddy.compileProd(answers).run(logMe)
  ).catch((err) => console.error(err));
} else {
  teamprofileBuddy.fakeAnswers().then(
    (answers) => teamprofileBuddy.compileDev(answers).run(logMe)
  ).catch((err) => console.error(err));
}