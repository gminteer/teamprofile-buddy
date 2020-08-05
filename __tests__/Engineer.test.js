const Engineer = require('../lib/Engineer');

employeeSharedTest(Engineer);

test("checks engineer's role and getter functions", () => {
  const engineer = new Engineer('John Doe', {github: 'jdoe47284'});

  expect(engineer.getGithub()).toEqual('jdoe47284');
  expect(engineer.getRole()).toEqual('Engineer');
});
