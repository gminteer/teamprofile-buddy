const Intern = require('../lib/Intern');

employeeSharedTest(Intern);

test("checks intern's role and getter functions", () => {
  const intern = new Intern('John Doe', {school: 'CGNU'});

  expect(intern.getSchool()).toEqual('CGNU');
  expect(intern.getRole()).toEqual('Intern');
});
