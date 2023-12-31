const {
  ErrorHandler: { BaseError },
} = require('intelli-utility');

class MOBILE_CANT_UPDATE extends BaseError {
  constructor() {
    const code = 'MOBILE_CANT_UPDATE';
    const statusCode = '500';
    const message = 'Update of number not possible now';
    const key = 'sts';
    super({ code, statusCode, message, key });
  }
}

module.exports = MOBILE_CANT_UPDATE;
