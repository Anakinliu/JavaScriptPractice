const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')


const userAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  console.log(method);
  console.log(path);

  // 登陆
  if (method === "POST") {
    if (path === "/api/user/login") {
      
      const { username, password } = req.body;
      // const { username, password } = req.querys;
      const resultPromise = loginCheck(username, password);

      return resultPromise.then(queryResult => {
        // 查询到的结果中有realname,说明用户名和密码验证成功.
        if (queryResult.realname) {
          // 则设置 session 的属性
          req.session.userName = queryResult.username;
          req.session.realName = queryResult.realname;
          console.log('SESSION: ', req.session.userName, req.session.realName);
          return new SuccessModel(queryResult.realname + '登陆成功');
        } else {
          return new ErrorModel(username + '不存在或密码错误');
        }
      })
    }
  }

  // 测试登陆功能用
  // if (method === "GET") {
  //   if (path === "/api/blog/login-test") {
  //     console.log('/api/blog/login-test : ', req.session);
  //     if (req.session.userName) {
  //       return Promise.resolve(new SuccessModel(req.session.userName + '已经登陆'));
  //     } else {
  //       return Promise.resolve(new ErrorModel('你还未登陆'));
  //     }

  //   }
  // }

  // res.end(JSON.stringify({"status": "OK"}));
};


module.exports = userAPIRouter;
