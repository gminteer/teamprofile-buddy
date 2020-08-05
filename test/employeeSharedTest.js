const {validate: uuidValidate} = require('uuid');
const {validate: emailValidate} = require('email-validator');

global.employeeSharedTest = (Constructor) => {
  return describe('Employee shared functionality', () => {
    let instance;
    beforeEach(() => {
      instance = new Constructor('John Doe');
    });
    test('employee has a company with a name and a domain', () => {
      expect(instance.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
    });
    test('employee has a valid uuid', () => {
      expect(uuidValidate(instance.getId())).toBeTruthy();
    });
    test('employee has a valid email address', () => {
      expect(emailValidate(instance.getEmail())).toBeTruthy();
    });
    test('getName() matches input', () => {
      expect(instance.getName()).toEqual('John Doe');
    });
  });
};
