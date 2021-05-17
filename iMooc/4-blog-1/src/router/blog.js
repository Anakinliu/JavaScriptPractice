const { getList, getDeatil, newBlog } = require("../controller/blog");
const { SuccessModel } = require("../model/resModel");

const blogAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  console.log('blogAPIRouter-method: ' + method);
  console.log('blogAPIRouter-path: ' + path);

  if (method === "GET") {
    if (path === "/api/blog/list") {
      const author = req.querys.author || '';
      const keyword = req.querys.keyword || '';
      const listBlog = getList(author, keyword);
      return new SuccessModel(listBlog);
    }
    if (path === "/api/blog/detail") {
      const blogID = req.querys.id;
      const deatilBlog = getDeatil(blogID);
      return new SuccessModel(deatilBlog);
    }
  }
  if (method === "POST") {
    // 新建
    if (path === "/api/blog/new") {
      const data = newBlog(req.body)
      return new SuccessModel(data);
    }
    // 更新
    if (path === "/api/blog/update") {
      return "blog-update";
    }
    // 删除
    if (path === "/api/blog/del") {
      return "blog-del";
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};

module.exports = blogAPIRouter;
