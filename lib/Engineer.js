const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, {github = name.replace(/\sg/, '.'), ...options} = {}) {
    super(name, options);

    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
