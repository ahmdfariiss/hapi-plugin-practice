/* eslint-disable */

const ClientError = require("./ClientError");

class InvariantError extends ClientError {
  constructor(message) {
    this.name = "Invariant Error";
  }
}

module.exports = InvariantError;
