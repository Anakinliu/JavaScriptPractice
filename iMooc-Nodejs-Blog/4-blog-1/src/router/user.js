const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const userAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  console.log(method);
  console.log(path);

  if (method === "GET") {
    if (path === "/api/blog/login") {
      // const {username, password} = req.body;
      const {username, password} = req.querys;
      const resultPromise = loginCheck(username, password);

      return resultPromise.then(queryResult => {
        if (queryResult.realname) {
          res.setHeader('Set-Cookie', `username=${queryResult.realname}`)
          return new SuccessModel(queryResult.realname + '登陆成功'); 
        } else {
          return new ErrorModel(username + '不存在或密码错误');
        }
      })
    }
  }

  if (method === "GET") {
    if (path === "/api/blog/login-test") {
        if (req.cookie.username) {
          return Promise.resolve(new SuccessModel(req.cookie.username + '已经登陆')); 
        } else {
          return Promise.resolve(new ErrorModel('你还未登陆'));
        }
      
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};


module.exports = userAPIRouter;
