const {v5: uuid} = require('uuid');

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
    this.domain = company.domain;
    this.email = email;
    this.avatar = avatar;
    // ref: IT policy HR/27b/6: employee id is v5 uuid(key: full email address, namespace: v5 uuid(key: company domain, namespace: DNS))
    this.id = uuid(email, uuid(company.domain, uuid.DNS));
  }
  // Not a fan of getter functions, but it's in the requirements...
  getAvatar() {
    return this.avatar;
  }
  getDomain() {
    return this.domain;
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
