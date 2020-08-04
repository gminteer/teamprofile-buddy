const {validate: uuidValidate} = require('uuid');

const Employee = require('../lib/Employee');

function baselineTest(Constructor) {
  return test('checks basic Employee functionality', () => {
    const instance = new Constructor('John Doe');

    expect(instance.company).toEqual(expect.objectContaining({name: expect.any(String), domain: expect.any(String)}));
    expect(instance.getName()).toEqual('John Doe');
    expect(uuidValidate(instance.getId())).toEqual(true);
    expect(instance.getEmail()).toEqual(`${instance.getName().replace(/\s/g, '.')}@${instance.company.domain}`);
  });
}
baselineTest(Employee);

test("checks employee's role", () => {
  const employee = new Employee('John Doe');

  expect(employee.getRole()).toEqual('Employee');
});

module.exports = baselineTest;
