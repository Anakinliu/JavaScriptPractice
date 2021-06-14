class BaseModel {
  constructor(message, data) {
    /**
     * data: 一个对象，无message时是一个字符串
     * message： 一个字符串
     */
    this.message = message || null;
    this.data = data || null;
  }
}

class SuccessModel extends BaseModel {
  constructor(message, data) {
    super(data, message);
    this.errno = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(message, data) {
    super(data, message);
    this.errno = -1;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
};
