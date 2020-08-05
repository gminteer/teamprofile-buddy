const Employee = require('../lib/Employee');

employeeSharedTest(Employee);

describe('Employee specific tests', () => {
  const employee = new Employee('John Doe');

  test('getRole() returns "Employee"', () => {
    expect(employee.getRole()).toEqual('Employee');
  });
});
