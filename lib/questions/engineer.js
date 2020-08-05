const faker = require('faker');
module.exports = (employee) => [
  {
    name: 'github',
    type: 'suggest',
    message: "What is the engineer's github username?",
    default: () => faker.internet.userName(...employee.name.split(' ', 2)),
    filter: (answer) => answer.trim(),
    validate(answer) {
      if (answer.length > 0 && answer.split(/\s/g).length === 1) return true;
      else return 'Please enter a valid github username.';
    },
    suggestions: [...Array(12).keys()].map((i) => faker.internet.userName(...employee.name.split(' ', 2))),
  },
];
