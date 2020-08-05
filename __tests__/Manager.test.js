const Manager = require('../lib/Manager');

employeeSharedTest(Manager);

describe('Manager specific tests', () => {
  let manager;
  beforeEach(() => {
    manager = new Manager('John Doe', {officeNumber: '+1-212-555-7890'});
  });
  test('getOfficeNumber() matches input', () => {
    expect(manager.getOfficeNumber()).toEqual('+1-212-555-7890');
  });
  test('getRole() returns "Manager"', () => {
    expect(manager.getRole()).toEqual('Manager');
  });
});
