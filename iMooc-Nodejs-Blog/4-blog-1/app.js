const blogAPIRouter = require("./src/router/blog");
const userAPIRouter = require("./src/router/user");
const querystring = require("querystring");

// 存储 sesion 数据
const SESSION_DATA = {};

// 设置 cookie 过期时间为 24小时
const setCookieExpires = () => {
  const now = new Date();
  now.setTime(now.getTime() + (24 * 60 * 60 * 1000));
  return now.toString();
}

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    // 请求非 post 方法
    if (req.method !== "POST") {
      resolve({});
      return;
    }
    // 请求的格式不正确
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
  // 每当一个用户进入,就有一条key-value加入到SESSION_DATA中
  console.log('handleHttp', SESSION_DATA);  

  // req要传到下面的API里，所以这种方法带值方便
  req.querys = querystring.parse(req.url.split("?")[1]);

  // 解析 cookie
  // console.log('cookie: ', req.headers.cookie, ' type ', typeof req.headers.cookie);  //string
  req.cookie = {};
  if (req.headers.cookie) {
    req.headers.cookie.split(";").forEach(element => {
      const kv = element.trim().split("=");
      req.cookie[kv[0]] = kv[1];
    });
  }
  console.log('req.cookie: ', req.cookie);

  // 解析 session
  let needSetCookie = false;
  let xID = req.cookie.xID;  // xID 对应教程里的 userId
  console.log('xID : ', xID);
  if (xID) {
    if (!SESSION_DATA[xID]) {
      SESSION_DATA[xID] = {};
    }
  } else {
    needSetCookie = true;
    // 生成一个 xID
    xID = `${Date.now()}_${Math.random()}`;
    SESSION_DATA[xID] = {};
  }
  // 绑定为 req 的一个属性,就像绑定 req.querys 那样,方便后面的路由使用
  // 每次请求 url 都经过上面验证后,存储在 req
  req.session = SESSION_DATA[xID];

  // 
  getPostData(req).then((postData) => {
    req.body = postData;  // req.body 会在路由中使用，存储了请求中 post 数据
    console.log('handleHttp req.body: ');
    console.dir(req.body);

    // 得到了一个 Promise 对象
    const blogPromise = blogAPIRouter(req, res);

    if (blogPromise) {
      blogPromise.then((blogData) => {
        if (blogData) {
          // 设置cookie 的 xID
          if (needSetCookie) {
            // 注意设置路径
            console.log('blogPromise.then : ', xID);
            res.setHeader('Set-Cookie', `xID=${xID}; path=/; httpOnly; expires=${setCookieExpires()}`);
          }
          // 设置相应数据格式为JSON，以便浏览器可以正确解析
          res.setHeader("Content-type", "application/json");
          console.log('blogData: ', blogData);
          res.end(JSON.stringify(blogData));
        }
      });
      return;
    }


    const userPromise = userAPIRouter(req, res);

    // if (blogPromise) {
    //   // 设置相应数据格式为JSON，以便浏览器可以正确解析
    //   res.setHeader("Content-type", "application/json");
    //   console.log('blogData: ', blogPromise);
    //   res.end(JSON.stringify(blogPromise));
    //   return;
    // }

    if (userPromise) {
      // 
      // res.setHeader("Content-type", "application/json");
      // res.end(JSON.stringify(userData));

      userPromise.then((userData) => {
        // 设置cookie 的 xID
        if (needSetCookie) {
          // 注意设置路径
          res.setHeader('Set-Cookie', `xID=${xID}; path=/; httpOnly; expires=${setCookieExpires()}`);
        }
        // 设置相应数据格式为JSON，以便浏览器可以正确解析
        res.setHeader("Content-type", "application/json");
        console.log('userData: ', userData);
        res.end(JSON.stringify(userData));

      });
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
