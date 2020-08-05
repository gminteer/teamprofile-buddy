const Intern = require('../lib/Intern');

employeeSharedTest(Intern);

describe('Intern specific tests', () => {
  let intern;
  beforeEach(() => {
    intern = new Intern('John Doe', {school: 'CGNU'});
  });

  test('getSchool() matches input', () => {
    expect(intern.getSchool()).toEqual('CGNU');
  });

  test('getRole() returns "Intern"', () => {
    expect(intern.getRole()).toEqual('Intern');
  });
});
