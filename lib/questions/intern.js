const fakeSchool = require('../fakeSchool');
module.exports = (employee) => [
  {
    name: 'school',
    type: 'suggest',
    message: 'What school is the intern attending?',
    suggestions: [...Array(12).keys()].map((i) => fakeSchool()),
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    validate: (answer) => answer.length > 0 || 'Please enter a school name.',
  },
];
