const Intern = require('../lib/Intern');
const baselineTest = require('./Employee.test');

baselineTest(Intern);

test("checks engineer's role and getter functions", () => {
  const intern = new Intern('John Doe', {school: 'CGNU'});

  expect(intern.getSchool()).toEqual('CGNU');
  expect(intern.getRole()).toEqual('Intern');
});
