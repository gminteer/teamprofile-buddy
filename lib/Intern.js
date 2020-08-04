const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, {school = 'Contoso Tech', ...options} = {}) {
    super(name, options);

    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
