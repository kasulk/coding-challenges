function validPhoneNumber(phoneNum) {
  return phoneNum.length === 14 && /\(\d{3}\) \d{3}-\d{3}/.test(phoneNum);
}
