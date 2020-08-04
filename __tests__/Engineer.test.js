const {validate: uuidValidate} = require('uuid');
const Engineer = require('../lib/Engineer');
const baselineTest = require('./Employee.test');

baselineTest(Engineer);

test("checks engineer's role and getter functions", () => {
  const engineer = new Engineer('John Doe', {github: 'jdoe47284'});

  expect(engineer.getGithub()).toEqual('jdoe47284');
  expect(engineer.getRole()).toEqual('Engineer');
});
