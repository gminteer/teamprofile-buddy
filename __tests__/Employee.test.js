const Employee = require('../lib/Employee');

test('creates an employee', () => {
  const employee = new Employee('John Doe');

  expect(employee.getName()).toEqual('John Doe');
  expect(employee.getId()).toEqual(expect.any(String));
  expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
  expect(employee.getRole()).toEqual('Employee');
});
