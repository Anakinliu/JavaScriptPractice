const {
  getList,
  getDeatil,
  newBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 公用的检查是否登陆函数
/**
 * 
 * @param {*} req HTTP请求
 * @returns 如果sesion中 无 用户名,证明用户未登录
 */
const loginChecks = (req) => {
  if (!req.session.userName) {
    return Promise.resolve(new ErrorModel('你还未登陆'));
  }
}


const blogAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  const blogID = req.querys.id;
  console.log("blogAPIRouter-method: " + method);
  console.log("blogAPIRouter-path: " + path);

  if (method === "GET") {

    // 博客列表
    if (path === "/api/blog/list") {
      const author = req.querys.author || "";
      const keyword = req.querys.keyword || "";
      const listResult = getList(author, keyword);
      return listResult.then((sqlResult) => {
        // sqlResult 就是db/mysql.js 的 con.query里 resolve 的results
        return new SuccessModel(sqlResult);
      }); // 返回的还是一个 Promise 对象
    }

    // 博客详情
    if (path === "/api/blog/detail") {
      const deatilResult = getDeatil(blogID);
      return deatilResult.then(detailBlog => {
        return new SuccessModel(detailBlog);
      });
    }
  }


  if (method === "POST") {
    // 用户新建博客
    if (path === "/api/blog/new") {
      // 用户在登录后才能进新建操作
      const checkResult = loginChecks(req);
      if (checkResult) {
        return checkResult;
      }
      const author = req.session.userName;
      req.body.author = author; 
      const addBlogPromise = newBlog(req.body);
      return addBlogPromise.then(data => {
        return new SuccessModel(data);
      })
    }
    // 用户更新博客
    if (path === "/api/blog/update") {
      const updateBlogPromise = updateBlog(blogID, req.body);
      return updateBlogPromise.then(data => {
        if (data) {
          return new SuccessModel("更新成功" + blogID);
        } else {
          return new ErrorModel("更新失败" + blogID);
        }
      })
      
    }

    // 用户删除博客
    if (path === "/api/blog/del") {
      // 用户在登录后才能进新建操作
      const checkResult = loginChecks(req);
      if (checkResult) {
        return checkResult;
      }
      const author = req.session.userName;
      const delBlogPromise = deleteBlog(blogID, author);
      return delBlogPromise.then(data => {
        if (data) {
          return new SuccessModel("删除成功" + blogID);
        } else {
          return new ErrorModel("删除失败" + blogID);
        }
      })
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};

module.exports = blogAPIRouter;
