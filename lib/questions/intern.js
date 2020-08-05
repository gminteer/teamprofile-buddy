module.exports = (employee) => [
  {
    name: 'school',
    type: 'input',
    message: 'What school is the intern attending?',
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    validate(answer) {
      if (answer.length > 0) return true;
      else return 'Please enter a school name.';
    },
  },
];
