module.exports = (domain) => [
  {
    name: 'name',
    type: 'input',
    message: "What's the employee's name?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
  },
  {
    name: 'email',
    type: 'input',
    message: "What is the employee's email address?",
    default: (answers) => `${answers.name.replace(/\s/g, '.')}@${domain}`,
  },
  {
    name: 'role',
    type: 'list',
    message: "What's the employee's role?",
    choices: [
      {
        value: 'manager',
        name: 'Manager',
      },
      {
        value: 'engineer',
        name: 'Engineer',
      },
      {
        value: 'intern',
        name: 'Intern',
      },
    ],
  },
];
