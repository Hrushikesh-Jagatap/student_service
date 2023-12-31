const {
  ErrorHandler: { BaseError },
} = require('intelli-utility');

class INPUT_FORMAT_ERROR extends BaseError {
  constructor() {
    const code = 'INPUT_FORMAT_ERROR';
    const statusCode = '200';
    const message = 'Language should be English';
    const key = 'sts';
    super({ code, statusCode, message, key });
  }
}

module.exports = INPUT_FORMAT_ERROR;
