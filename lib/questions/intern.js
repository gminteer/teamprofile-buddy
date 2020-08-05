module.exports = (employee) => [
  {
    name: 'school',
    type: 'input',
    message: 'What school is the intern attending?',
    validate(answer) {
      if (answer.length > 0) return true;
      else return 'Please enter a school name.';
    },
  },
];
