module.exports = [
  {
    name: 'github',
    type: 'input',
    message: "What is the engineer's github username?",
    filter: (answer) => answer.trim(),
    validate(answer) {
      if (answer.split(/\s/g).length === 1) return true;
      else return 'Please enter a valid github username.';
    },
  },
];
