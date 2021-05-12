class BaseModel {
  constructor(data, message) {
    /**
     * data: 一个对象，无message时是一个字符串
     * message： 一个字符串
     */
    this.message = message || typeof data === 'string' ? data : undefined;
    this.data = data || null;
  }

}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = 0;
    }
}

class ErrorModel extends BaseModel {
    constructor(data, model) {
        super(data, this.message);
        this.errno = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}

