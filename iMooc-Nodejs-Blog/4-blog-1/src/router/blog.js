const {
  getList,
  getDeatil,
  newBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const blogAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  const blogID = req.querys.id;
  console.log("blogAPIRouter-method: " + method);
  console.log("blogAPIRouter-path: " + path);

  if (method === "GET") {
    if (path === "/api/blog/list") {
      const author = req.querys.author || "";
      const keyword = req.querys.keyword || "";
      const listResult = getList(author, keyword);
      return listResult.then((sqlResult) => {
        // sqlResult 就是db/mysql.js 的 con.query里 resolve 的results
        return new SuccessModel(sqlResult);
      }); // 返回的还是一个 Promise 对象
    }
    if (path === "/api/blog/detail") {
      const deatilResult = getDeatil(blogID);
      return deatilResult.then(detailBlog => {
        return new SuccessModel(detailBlog);
      });
    }
  }

  if (method === "POST") {
    // 新建
    if (path === "/api/blog/new") {
      // 用户名在登录后才能得到，这里先写假数据
      req.body.author = 'bee';
      const addBlogResult = newBlog(req.body);
      return addBlogResult.then(data => {
        return new SuccessModel(data);
      })
    }
    // 更新
    if (path === "/api/blog/update") {
      const result = updateBlog(blogID, res.body);
      if (result) {
        return new SuccessModel("更新成功" + blogID);
      } else {
        return new ErrorModel("更新失败" + blogID);
      }
    }
    // 删除
    if (path === "/api/blog/del") {
      const result = deleteBlog(blogID);
      if (result) {
        return new SuccessModel("删除成功" + blogID);
      } else {
        return new ErrorModel("删除失败" + blogID);
      }
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};

module.exports = blogAPIRouter;
