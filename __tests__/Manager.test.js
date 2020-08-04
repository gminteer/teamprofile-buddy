const Manager = require('../lib/Manager');

test('creates a manager', () => {
  const manager = new Manager('John Doe', {officeNumber: '+15555551212'});

  expect(manager.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
});
