const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {config} = require('dotenv');

// require('dotenv').config();
config();
const jwtToken = {
  createToken({ id, email }) {
    return jwt.sign(
      { userId: id, email },
      process.env.JWT_SECRET || "asdfggsasdafsdfa",
      { expiresIn: '24h' }
    );
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "asdfggsasdafsdfa", { expiresIn: '24h', });
    console.log(deocded,'console decoded');
    return decoded;
  }
};
const hashPassword = (password) => bcrypt.hashSync(password,12);
const ComparePassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
  jwtToken,
  hashPassword,
  ComparePassword
}