module.exports = (employee) => [
  {
    name: 'github',
    type: 'input',
    message: "What is the engineer's github username?",
    default: () => `${employee.name.replace(/\s+/g, '.')}`,
    filter: (answer) => answer.trim(),
    validate(answer) {
      if (answer.split(/\s/g).length === 1) return true;
      else return 'Please enter a valid github username.';
    },
  },
];
