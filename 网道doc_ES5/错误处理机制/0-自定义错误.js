function UserError(message) {
    this.message = message || '用户错误'
    this.name = '用户错误'
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;

let x = 1;
if (x) {
    throw new UserError("除数出错")
}


