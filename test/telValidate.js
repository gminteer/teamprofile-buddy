module.exports = (phoneNumber) => {
  const naPhoneRegex = /^(\+?1[\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(\s(?:x|X)\d{1,6})?$/;
  const intlPhoneRegex = /^\(?(?:\+|0+)(\d{1,4})[\s.)]?(?:\.|\s*)(\d{5,14})((?:x|X)\d{1,6})?$/;
  return (
    naPhoneRegex.test(phoneNumber) ||
    intlPhoneRegex.test(phoneNumber.replace(/^([^\s]*)(\s)/, '$1.').replace(/(-|\s+)/g, ''))
  );
};
