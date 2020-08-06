const faker = require('faker');

function fakeSchoolSuffix() {
  const suffixes = ['Tech', 'University', 'College', 'Academy', 'School', 'Polytechnic'];
  return suffixes[Math.floor(Math.random() * suffixes.length)];
}

function fakeSchool() {
  const schoolFormats = [
    `${faker.address.city()} ${Math.random() > 0.5 ? 'City ' : ''}${fakeSchoolSuffix()}`,
    `${faker.address.state()} ${Math.random() > 0.5 ? 'State ' : ''}${fakeSchoolSuffix()}`,
    `${fakeSchoolSuffix()} of ${Math.random() > 0.5 ? faker.address.city() : faker.address.state()}`,
  ];
  return schoolFormats[Math.floor(Math.random() * schoolFormats.length)];
}

module.exports = fakeSchool;
