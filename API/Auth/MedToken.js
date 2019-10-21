const jwt = require("jsonwebtoken");
const secret = require("../../Secrets/secret");

function generateMedToken(pro) {
  const payload = {
    subject: pro.id,
  };
  const options = {
    expiresIn: "8h",
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = generateMedToken;
