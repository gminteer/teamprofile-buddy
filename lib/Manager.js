const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, {officeNumber = '1-555-555-1212', ...options} = {}) {
    super(name, options);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
