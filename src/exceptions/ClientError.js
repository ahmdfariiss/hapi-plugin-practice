/* eslint-disable */
class ClientError extends Error {
  constructor(message, status = 400) {
    this.statusCode = this.statusCode;
    this.name = "Client Error";
  }
}

module.exports = ClientError;
