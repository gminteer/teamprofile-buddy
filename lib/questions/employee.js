const {validate: emailValidate} = require('email-validator');
const faker = require('faker');
module.exports = ({domain, type}) => [
  {
    name: 'name',
    type: 'suggest',
    message: `What's the ${type}'s name?`,
    suggestions: [...Array(12).keys()].map((i) => faker.fake('{{name.firstName}} {{name.lastName}}')),
    filter: (answer) => answer.trim().replace(/\s+/g, ' '),
    validate(answer) {
      if (answer.length > 0) return true;
      else return 'Please enter a name.';
    },
  },
  {
    name: 'email',
    type: 'input',
    message: `What is the ${type}'s email address (default domain: "${domain}")`,
    default: (answers) => faker.internet.userName(...answers.name.split(' ', 2)),
    filter: (answer) => {
      answer.trim();
      if (answer.indexOf('@') < 0) answer += `@${domain}`;
      return answer;
    },
    validate(answer) {
      const validEmail = emailValidate(answer);
      return validEmail || 'Please enter a valid email address.';
    },
  },
];
