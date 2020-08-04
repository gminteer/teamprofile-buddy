const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, {officeNumber = '+15555551212', ...options} = {}) {
    super(name, options);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
