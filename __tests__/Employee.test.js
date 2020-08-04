const {validate: uuidValidate} = require('uuid');
const Employee = require('../lib/Employee');

test('creates an employee', () => {
  const employee = new Employee('John Doe');

  expect(employee.getName()).toEqual('John Doe');
  expect(uuidValidate(employee.getId())).toEqual(true);
  expect(employee.getEmail()).toEqual(`${employee.getName().replace(/\s/g, '.')}@${employee.company_domain}`);
  expect(employee.getRole()).toEqual('Employee');
});
