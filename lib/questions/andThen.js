module.exports = {
  name: 'addEmployee',
  type: 'list',
  message: 'Add an employee?',
  choices: [
    {
      value: 'engineer',
      name: 'Add an engineer.',
    },
    {
      value: 'intern',
      name: 'Add an intern.',
    },
    {
      value: false,
      name: 'Done adding employees.',
    },
  ],
};
