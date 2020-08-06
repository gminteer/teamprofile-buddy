const {v4: uuid} = require('uuid');

class Employee {
  constructor(
    name,
    {
      company = {
        domain: 'contoso.com',
      },
      email = `${name.replace(/\s/g, '.')}@${company.domain}`,
      avatar = null,
    } = {}
  ) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
    // per The Conotoso Group's current union agreement, employee IDs cannot imply hierarchy or seniority so sequential numbers are out.
    this.id = uuid();
  }
  getAvatar() {
    return this.avatar;
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
