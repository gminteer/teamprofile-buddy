const inquirer = require('inquirer');

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
  let addEmployee = true;
  do {
    const employeeBase = await inquirer.prompt(questions.employee(data.company.domain));
    // only engineer needs previously gathered info (to create a default for github username), but they all get it for simplicity
    const employeeExtra = await inquirer.prompt(questions[employeeBase.role](employeeBase));
    const employee = new Constructor[employeeBase.role](employeeBase.name, {
      ...employeeBase,
      ...employeeExtra,
      company: data.company,
    });
    data.employees.push(employee);
    ({addEmployee} = await inquirer.prompt(questions.andThen)); // need the parentheses to destructure the return value
  } while (addEmployee);
  return data;
}

module.exports = getAnswers;
