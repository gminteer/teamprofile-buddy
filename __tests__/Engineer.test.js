const Engineer = require('../lib/Engineer');

employeeSharedTest(Engineer);

describe('Engineer specific tests', () => {
  let engineer;
  beforeEach(() => {
    engineer = new Engineer('John Doe', {github: 'jdoe47284'});
  });

  test('getGithub() matches input', () => {
    expect(engineer.getGithub()).toEqual('jdoe47284');
  });

  test('getRole() returns "Engineer"', () => {
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
