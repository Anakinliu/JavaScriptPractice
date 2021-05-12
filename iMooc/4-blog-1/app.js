const blogAPI = require("./src/router/blog");
const userAPI = require("./src/router/user");
const querystring = require('querystring');

const handleHttp = function (req, res) {
  // req要传到下面的API里，所以这种方法带值方便
  req.querys = querystring.parse(req.url.split('?')[1]);

  // 得到了JSON结果
  const blogData = blogAPI(req, res);
  const userData = userAPI(req, res);

  if (blogData) {
    // 设置相应数据格式为JSON，以便浏览器可以正确解析
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(blogData));
    return;
  }
  if (userData) {
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(userData));
    return;
  }

  // 都没找到返回 404
  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 NOT FOUND");
  res.end("");
};

module.exports = handleHttp;

// process.env.NODE_ENV
