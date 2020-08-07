const {v5: uuid} = require('uuid');
const {validate: emailValidate} = require('email-validator');

global.employeeSharedTest = (Constructor) => {
  return describe('Employee shared functionality', () => {
    let employee;
    beforeEach(() => {
      employee = new Constructor('John Doe');
    });

    test('employee has correct ID', () => {
      expect(employee.getId()).toEqual(uuid(employee.getEmail(), uuid(employee.getDomain(), uuid.DNS)));
    });

    test('employee has a valid email address', () => {
      expect(emailValidate(employee.getEmail())).toBeTruthy();
    });

    test('getName() matches input', () => {
      expect(employee.getName()).toEqual('John Doe');
    });
  });
};
