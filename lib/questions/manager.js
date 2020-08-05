const telValidate = require('../telValidate');
module.exports = (employee) => [
  {
    name: 'officeNumber',
    type: 'input',
    message: "What is the manager's office number?",
    filter: (answer) => answer.trim(),
    validate(answer) {
      if (telValidate(answer)) return true;
      else return 'Please enter a valid phone number (non-US/Canadian phone numbers need to start with a plus sign).';
    },
  },
];
