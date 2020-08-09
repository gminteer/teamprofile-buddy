const faker = require('faker');
const telValidate = require('../../lib/telValidate');
module.exports = (employee) => [
  {
    name: 'officeNumber',
    type: 'suggest',
    message: "What is the manager's office number?",
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    validate: (answer) => telValidate(answer) || 'Please enter a valid phone number (non-US/Canadian phone numbers need to start with a plus sign or zero).',
    suggestions: [...Array(12).keys()].map((i) => faker.phone.phoneNumber()),
  },
];
