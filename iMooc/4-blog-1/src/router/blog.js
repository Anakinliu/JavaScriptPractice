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
      const listBlog = getList(author, keyword);
      return new SuccessModel(listBlog);
    }
    if (path === "/api/blog/detail") {
      const deatilBlog = getDeatil(blogID);
      return new SuccessModel(deatilBlog);
    }
  }
  if (method === "POST") {
    // 新建
    if (path === "/api/blog/new") {
      const data = newBlog(req.body);
      return new SuccessModel(data);
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
