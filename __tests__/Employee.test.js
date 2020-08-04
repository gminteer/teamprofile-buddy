const {validate: uuidValidate} = require('uuid');
const Employee = require('../lib/Employee');

test('creates an employee, verifies employee has a company', () => {
  const employee = new Employee('John Doe');

  expect(employee.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
});

test("checks employee's getter functions", () => {
  const employee = new Employee('John Doe');

  expect(employee.getName()).toEqual('John Doe');
  expect(uuidValidate(employee.getId())).toEqual(true);
  expect(employee.getEmail()).toEqual(`${employee.getName().replace(/\s/g, '.')}@${employee.company.domain}`);
  expect(employee.getRole()).toEqual('Employee');
});
