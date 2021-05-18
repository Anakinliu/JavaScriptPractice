const getList = (author, keyword) => {
  // 一个包含若干个完整博客对象的列表
  return [
    {
      id: 1,
      title: "第一个博客",
      createTime: 1620782276765,
      content: "在编译语言中，常量将在编译时替换,这导致更好的性能。",
      author: "小米",
    },
    {
      id: 2,
      title: "第二个博客",
      createTime: 1620782302208,
      content: "在编译语言中，常量将在编译时替换,这导致更好的性能。",
      author: "小明",
    },
  ];
};

const getDeatil = (id) => {
  // 先不进行检查和运算，直接返回假数据
  return {
    id: 1,
    title: "第一个博客",
    createTime: 1620782276765,
    content: "在编译语言中，常量将在编译时替换,这导致更好的性能。",
    author: "小米",
  };
};

const newBlog = (data) => {
  const blogData = data || {};
  // blogData就是从请求中得到的对象，包含 title content createtime author等属性
  console.log("controller blogData: ", blogData);

  // 需要执行入表操作,后边补上

  // 先假设执行成功，返回插入插入表时的id
  return {
    id: 3,
  };
};

const updateBlog = (id, data) => {
  const blogID = id;
  const blogData = data;
  // 更新数据库的博客

  // 成功更新返回 true
  return false;
};

const deleteBlog = (id) => {
  const blogID = id;
  // 根据 id 删除表中的博客

  return true;
};

module.exports = {
  getList,
  getDeatil,
  newBlog,
  updateBlog,
  deleteBlog,
};
