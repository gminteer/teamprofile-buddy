const {validate: uuidValidate} = require('uuid');

const Manager = require('../lib/Manager');
const baselineTest = require('./Employee.test');

baselineTest(Manager);

test("checks manager's role and getter functions", () => {
  const manager = new Manager('John Doe', {officeNumber: '+1-212-555-7890'});

  expect(manager.getOfficeNumber()).toEqual('+1-212-555-7890');
  expect(manager.getRole()).toEqual('Manager');
});
