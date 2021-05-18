const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const userAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  console.log(method);
  console.log(path);

  if (method === "POST") {
    if (path === "/api/blog/login") {
      const {username, password} = req.body;
      const result = loginCheck(username, password);
      console.log('userAPIRouter-login: ', username, password);
      if (result) {
        return new SuccessModel("登陆成功" + username);
      } else {
        return new ErrorModel("登陆失败" + username);
      }
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};


module.exports = userAPIRouter;
