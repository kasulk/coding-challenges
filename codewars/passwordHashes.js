const { createHash } = require("crypto");

function passHash(str) {
  return createHash("md5").update(str).digest("hex");
}
