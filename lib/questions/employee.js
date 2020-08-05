const {validate: emailValidate} = require('email-validator');
const faker = require('faker');
const fakeEmail = ({name, domain}) => `${faker.internet.userName.apply(null, name.split(' ', 2))}@${domain}`;
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
    default: (answers) => fakeEmail({name: answers.name, domain}),
    filter: (answer) => {
      answer.trim();
      if (answer.length > 0 && answer.indexOf('@') < 0) answer += `@${domain}`;
      return answer;
    },
    validate(answer) {
      const validEmail = emailValidate(answer);
      return validEmail || 'Please enter a valid email address.';
    },
  },
];
