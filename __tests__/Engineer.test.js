const {validate: uuidValidate} = require('uuid');
const Engineer = require('../lib/Engineer');

test('creates a engineer, verifies the engineer has a company', () => {
  const engineer = new Engineer('John Doe');

  expect(engineer.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
});

test("checks engineer's getter functions", () => {
  const engineer = new Engineer('John Doe', {github: 'jdoe47284'});

  expect(engineer.getName()).toEqual('John Doe');
  expect(engineer.getGithub()).toEqual('jdoe47284');
  expect(uuidValidate(engineer.getId())).toEqual(true);
  expect(engineer.getEmail()).toEqual(`${engineer.getName().replace(/\s/g, '.')}@${engineer.company.domain}`);
  expect(engineer.getRole()).toEqual('Engineer');
});
