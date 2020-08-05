const telValidate = require('../lib/telValidate');

describe('Phone number validator test', () => {
  const validNumbers = ['1-800-555-1212', '1 (212) 123 4567 x1001', '123.456.7890', '+123.4567890x101'];
  test.each(validNumbers)('%p should validate', (number) => {
    expect(telValidate(number)).toBeTruthy();
  });

  const invalidNumbers = ['222-1234', '0034 434 34853', '123-456-7890x12345', '212-213-34231', '22-3245'];
  test.each(invalidNumbers)("%p shouldn't validate", (number) => {
    expect(telValidate(number)).toBeFalsy();
  });
});
