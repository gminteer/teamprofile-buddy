module.exports = (phoneNumber) => {
  const naPhoneRegex = /^([1][\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(x\d{4})?$/;
  const intlPhoneRegex = /^\+(\d{1,3}).?\d{6,14}(x\d{4})?$/;
  return phoneNumber.match(naPhoneRegex) || phoneNumber.match(intlPhoneRegex);
};
