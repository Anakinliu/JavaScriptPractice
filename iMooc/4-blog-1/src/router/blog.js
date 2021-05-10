const blogAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  console.log(method);
  console.log(path);

  if (method === "GET") {
    if (path === "/api/blog/list") {
      return "blog-list";
    }
    if (path === "/api/blog/detail") {
      return "blog-detail";
    }
  }
  if (method === "POST") {
    if (path === "/api/blog/new") {
      return "blog-new";
    }
    if (path === "/api/blog/update") {
      return "blog-update";
    }
    if (path === "/api/blog/update") {
      return "blog-update";
    }
    if (path === "/api/blog/del") {
      return "blog-del";
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};

module.exports = blogAPIRouter;
