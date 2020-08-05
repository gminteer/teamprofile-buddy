module.exports = [
  {
    name: 'name',
    type: 'input',
    message: "What's the employee's name?",
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
