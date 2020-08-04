const {v4: uuid} = require('uuid');

class Employee {
  constructor(name, company_name = 'The Contoso Group', company_domain = 'contoso.com') {
    this.name = name;
    this.company_name = company_name;
    this.company_domain = company_domain;
    // per the Conotoso Group's current union agreement, employee IDs cannot imply hierarchy or seniority so random uuids are used.
    this.id = uuid();
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return `${this.name.replace(/\s/g, '.')}@${this.company_domain}`;
  }
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
