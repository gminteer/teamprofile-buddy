// O
//  template(data)
//    template(header)
//    for employee in data
//      template += card(employee)

const inquirer = require('inquirer');

const questions = require('./questions');

const Constructor = {
  manager: require('./Manager'),
  engineer: require('./Engineer'),
  intern: require('./Intern'),
};

async function getAnswers() {
  const data = {employees: []};
  inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
  data.global = await inquirer.prompt(questions.global);
  let addEmployee = true;
  do {
    const employeeBase = await inquirer.prompt(questions.employee(data.global.company.domain));
    // only engineer needs previously gathered info (to create a default for github username), but they all get it for simplicity
    const employeeExtra = await inquirer.prompt(questions[employeeBase.role](employeeBase));
    const employee = new Constructor[employeeBase.role](employeeBase.name, {
      ...employeeBase,
      ...employeeExtra,
      company: data.global.company,
    });
    data.employees.push(employee);
    ({addEmployee} = await inquirer.prompt(questions.andThen));
  } while (addEmployee);
  return data;
}

module.exports = {getAnswers};
