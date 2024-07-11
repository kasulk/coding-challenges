function isValidIP(str) {
  const onlyNumsAndDots = /^[0-9.]+$/;
  if (!onlyNumsAndDots.test(str)) return false;

  const octets = str.split(".");
  if (octets.length !== 4) return false;

  for (let octet of octets) {
    if (!octet.length) return false;
    if (octet < 0 || octet > 255) return false;
    if (octet.startsWith("0") && octet.length > 1) return false;
  }

  return true;
}
