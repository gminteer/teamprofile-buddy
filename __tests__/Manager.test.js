const Manager = require('../lib/Manager');

employeeSharedTest(Manager);

test("checks manager's role and getter functions", () => {
  const manager = new Manager('John Doe', {officeNumber: '+1-212-555-7890'});

  expect(manager.getOfficeNumber()).toEqual('+1-212-555-7890');
  expect(manager.getRole()).toEqual('Manager');
});
