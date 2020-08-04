const {validate: uuidValidate} = require('uuid');
const Manager = require('../lib/Manager');

test('creates a manager, verifies the manager has a company', () => {
  const manager = new Manager('John Doe');

  expect(manager.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
});

test("checks manager's getter functions", () => {
  const manager = new Manager('John Doe');

  expect(manager.getName()).toEqual('John Doe');
  expect(uuidValidate(manager.getId())).toEqual(true);
  expect(manager.getEmail()).toEqual(`${manager.getName().replace(/\s/g, '.')}@${manager.company.domain}`);
  expect(manager.getRole()).toEqual('Manager');
});
