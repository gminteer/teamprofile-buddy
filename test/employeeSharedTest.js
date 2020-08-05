const {validate: uuidValidate} = require('uuid');
const {validate: emailValidate} = require('email-validator');

global.employeeSharedTest = (Constructor) => {
  return describe('Employee shared functionality', () => {
    test('checks basic Employee functionality', () => {
      const instance = new Constructor('John Doe');

      expect(instance.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
      expect(instance.getName()).toEqual('John Doe');
      expect(uuidValidate(instance.getId())).toBeTruthy();
      expect(emailValidate(instance.getEmail())).toBeTruthy();
    });
  });
};
