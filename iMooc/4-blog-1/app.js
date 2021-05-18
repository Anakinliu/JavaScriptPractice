const blogAPIRouter = require("./src/router/blog");
const userAPIRouter = require("./src/router/user");
const querystring = require("querystring");

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({});
      return;
    }
    // 只有满足 content-type 且请求方式是 POST 才会执行到这里
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      if (!postData) {
        resolve({});
        return;
      }
      // 这个 JSON.parse(postData) 就是传入getPostData(req).then 中的 postData
      resolve(JSON.parse(postData));
    });
  });
};

const handleHttp = function (req, res) {
  // req要传到下面的API里，所以这种方法带值方便
  req.querys = querystring.parse(req.url.split("?")[1]);

  getPostData(req).then((postData) => {
    req.body = postData;  // 会在路由中使用，以获取请求中的 post 数据
    console.log('handleHttp req.body: ');
    console.dir(req.body);
    // 得到了JSON结果
    const blogData = blogAPIRouter(req, res);
    const userData = userAPIRouter(req, res);

    if (blogData) {
      // 设置相应数据格式为JSON，以便浏览器可以正确解析
      res.setHeader("Content-type", "application/json");
      console.log('blogData: ', blogData);
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

  });
};

module.exports = handleHttp;

// process.env.NODE_ENV
