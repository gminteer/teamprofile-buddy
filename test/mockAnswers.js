const faker = require('faker');
const fakeSchool = require('./fakeSchool');

const Constructor = {
  manager: require('../lib/Manager'),
  engineer: require('../lib/Engineer'),
  intern: require('../lib/Intern'),
};

function fakeEmployeeData(domain) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  return {
    name: `${firstName} ${lastName}`,
    email: `${faker.internet.userName(firstName, lastName)}@${domain}`,
    school: fakeSchool(),
    officeNumber: faker.phone.phoneNumber(),
    github: faker.internet.userName(firstName, lastName),
  };
}

async function getAnswers() {
  const companyName = faker.company.companyName();
  const data = {
    company: {name: companyName, domain: `${companyName.replace(/[^\w\d-]/g, '')}.${faker.internet.domainSuffix()}`},
    team: faker.fake('{{name.jobDescriptor}} {{name.jobArea}}'),
  };
  let name, attrs;
  ({name, ...attrs} = fakeEmployeeData(data.company.domain));
  data.employees = [new Constructor.manager(name, attrs)];
  for (let i = 0; i < Math.ceil(Math.random() * 8); i++) {
    ({name, ...attrs} = fakeEmployeeData(data.company.domain));
    data.employees.push(new Constructor.engineer(name, attrs));
  }
  for (let i = 0; i < Math.ceil(Math.random() * 8); i++) {
    ({name, ...attrs} = fakeEmployeeData(data.company.domain));
    data.employees.push(new Constructor.intern(name, attrs));
  }
  return data;
}

module.exports = getAnswers;
