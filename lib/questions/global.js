const faker = require('faker');

module.exports = [
  {
    name: 'company.name',
    type: 'suggest',
    message: "What is your company's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    suggestions: [...Array(12).keys()].map((i) => faker.company.companyName()),
  },
  {
    name: 'company.domain',
    type: 'input',
    message: "What is your company's domain name?",
    default: ({company}) => `${company.name.replace(/[\s,&]/g, '')}.com`,
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
  },
  {
    name: 'team',
    type: 'suggest',
    message: "What is your team's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    suggestions: [...Array(12).keys()].map((i) => faker.fake('{{name.jobDescriptor}} {{name.jobArea}}')),
  },
];
