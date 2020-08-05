const Employee = require('../lib/Employee');

employeeSharedTest(Employee);

test("checks employee's role", () => {
  const employee = new Employee('John Doe');

  expect(employee.getRole()).toEqual('Employee');
});
