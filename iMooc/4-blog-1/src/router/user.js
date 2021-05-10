const userAPIRouter = (req, res) => {
  const method = req.method;
  const path = req.url.split("?")[0];
  console.log(method);
  console.log(path);

  if (method === "GET") {
    if (path === "/api/blog/login") {
      return "blog-login";
    }
  }
  // res.end(JSON.stringify({"status": "OK"}));
};

module.exports = userAPIRouter;
