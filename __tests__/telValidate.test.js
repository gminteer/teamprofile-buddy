const faker = require('faker');
const telValidate = require('../lib/telValidate');

describe('Phone number validator test', () => {
  let validNumbers = [...Array(3).keys()].map((i) => faker.phone.phoneNumber());
  test.each(validNumbers)('%p should validate', (number) => {
    expect(telValidate(number)).toBeTruthy();
  });

  faker.locale = 'de';
  validNumbers = [...Array(3).keys()].map((i) => faker.phone.phoneNumber());
  test.each(validNumbers)('%p should validate', (number) => {
    expect(telValidate(number)).toBeTruthy();
  });

  faker.locale = 'uk';
  validNumbers = [...Array(3).keys()].map((i) => faker.phone.phoneNumber());
  test.each(validNumbers)('%p should validate', (number) => {
    expect(telValidate(number)).toBeTruthy();
  });

  faker.locale = 'fr';
  validNumbers = [...Array(3).keys()].map((i) => faker.phone.phoneNumber());
  test.each(validNumbers)('%p should validate', (number) => {
    expect(telValidate(number)).toBeTruthy();
  });

  const invalidNumbers = [
    '222-1234',
    '123-456-78901x12345',
    '212-213-34231',
    '22-3245',
    '123-456-7890x1234567',
    '0023 1234',
  ];
  test.each(invalidNumbers)("%p shouldn't validate", (number) => {
    expect(telValidate(number)).toBeFalsy();
  });
});
