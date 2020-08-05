const faker = require('faker');

module.exports = [
  {
    name: 'company.name',
    type: 'suggest',
    message: "What is your company's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    suggestions: [...Array(12).keys()].map((i) => faker.company.companyName()),
    validate(answer) {
      if (answer.length > 0) return true;
      else return 'Please enter a company name.';
    },
  },
  {
    name: 'company.domain',
    type: 'input',
    message: "What is your company's domain name?",
    default: ({company}) => `${company.name.replace(/[^\w\d-]/g, '')}.com`,
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    validate(answer) {
      if (answer.length > 0 && answer.indexOf('.') > 0) return true;
      else return 'Please enter a valid domain name.';
    },
  },
  {
    name: 'team',
    type: 'suggest',
    message: "What is your team's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    suggestions: [...Array(12).keys()].map((i) => faker.fake('{{name.jobDescriptor}} {{name.jobArea}}')),
    validate(answer) {
      if (answer.length > 0) return true;
      else return 'Please enter a team name.';
    },
  },
];
