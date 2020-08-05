module.exports = {
  name: 'addEmployee',
  type: 'list',
  message: 'Add another employee?',
  choices: [
    {
      value: true,
      name: 'Yes',
    },
    {
      value: false,
      name: 'No',
    },
  ],
};
