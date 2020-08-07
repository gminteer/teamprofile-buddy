module.exports = (phoneNumber) => {
  // regexplation
  // possible (+1) at the start with some sort of separator at the end, might not have a '+' character
  // 3 numbers, might have parentheses around it, some sort of separator at end
  // another 3 numbers, some sort of separator
  // another 4 numbers
  // possible 'x' (or capital 'X'), followed by 1 to 6 numbers
  const naPhoneRegex = /^(\+?1[\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(\s(?:x|X)\d{1,6})?$/;
  // not as comprehensive as the North American Dialing Plan validator, but it's somewhat accurate (at least for Europe)
  // a plus or one (or more) leading zeros, followed by 1 to 4 numbers, might have parentheses around it, might have a separator
  // followed by 5 to 14 numbers
  // possible extension at the end (same rules as NA numbers)
  const intlPhoneRegex = /^\(?(?:\+|0+)(\d{1,4})[\s.)]?(?:\.|\s*)(\d{5,14})((?:x|X)\d{1,6})?$/;
  // strip any sort of separation (except country code) for international numbers because I'm not even going to try to validate that
  return (
    naPhoneRegex.test(phoneNumber) ||
    intlPhoneRegex.test(phoneNumber.replace(/^([^\s]*)(\s)/, '$1.').replace(/(-|\s+)/g, ''))
  );
};
