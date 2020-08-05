module.exports = [
  {
    name: 'company.name',
    type: 'input',
    message: "What is your company's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
  },
  {
    name: 'company.domain',
    type: 'input',
    message: "What is your company's domain name?",
    default: ({company}) => `${company.name.replace(/\s/g, '')}.com`,
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
  },
  {
    name: 'team',
    type: 'input',
    message: "What is your team's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
  },
];
