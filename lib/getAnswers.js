const inquirer = require('inquirer');
const {image: fakeImage} = require('faker');
const questions = require('./questions');

const Constructor = {
  manager: require('./Manager'),
  engineer: require('./Engineer'),
  intern: require('./Intern'),
};

async function getAnswers() {
  inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
  const data = await inquirer.prompt(questions.global);
  data.employees = [];
  let addEmployee = 'manager';
  do {
    const employeeBase = await inquirer.prompt(questions.employee({domain: data.company.domain, type: addEmployee}));
    const employeeExtra = await inquirer.prompt(questions[addEmployee](employeeBase));
    const employee = new Constructor[addEmployee](employeeBase.name, {
      ...employeeBase,
      ...employeeExtra,
      company: data.company,
      avatar: fakeImage.avatar(),
    });
    // there's probably a more elegant way to do this...
    if (addEmployee === 'manager') data.manager = employee;
    else data.employees.push(employee);
    ({addEmployee} = await inquirer.prompt(questions.andThen)); // need the parentheses to destructure the return value
  } while (addEmployee);
  return data;
}

module.exports = getAnswers;
