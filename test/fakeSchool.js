const {address: fakeAddress} = require('faker');

function fakeSchoolNoun() {
  const nouns = ['Tech', 'University', 'College', 'Academy', 'School', 'Polytechnic'];
  return nouns[Math.floor(Math.random() * nouns.length)];
}

function fakeSchool() {
  const schoolFormats = [
    `${fakeAddress.city()} ${Math.random() > 0.5 ? 'City ' : ''}${fakeSchoolNoun()}`,
    `${fakeAddress.state()} ${Math.random() > 0.5 ? 'State ' : ''}${fakeSchoolNoun()}`,
    `${fakeSchoolNoun()} of ${Math.random() > 0.5 ? fakeAddress.city() : fakeAddress.state()}`,
  ];
  return schoolFormats[Math.floor(Math.random() * schoolFormats.length)];
}

module.exports = fakeSchool;
