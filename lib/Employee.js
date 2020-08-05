const {v4: uuid} = require('uuid');

class Employee {
  constructor(name, {company = {domain: 'contoso.com'}, email = `${name.replace(/\s/g, '.')}@${company.domain}`} = {}) {
    this.name = name;
    this.email = email;
    // per The Conotoso Group's current union agreement, employee IDs cannot imply hierarchy or seniority so sequential numbers are out.
    this.id = uuid();
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
