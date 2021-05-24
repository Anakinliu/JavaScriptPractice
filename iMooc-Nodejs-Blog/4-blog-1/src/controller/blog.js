const { execSql } = require('../db/mysql');

const getList = (author, keyword) => {
  // 一个包含若干个完整博客对象的列表
  let sql = `SELECT * FROM blogtable WHERE 1=1 `;
  if (author) {
    sql += `AND author='${author}' `;
  }
  if (keyword) {
    sql += `AND title LIKE '%${keyword}%' `;
  }
  sql += `ORDER BY createtime DESC;`
  return execSql(sql);
};

const getDeatil = (id) => {
  // 先不进行 sql 是否合法的检查
  const sql = `SELECT * FROM blogtable WHERE id=${id}`;
  return execSql(sql).then((rowsResult) => {
    return rowsResult[0];  //  根据数据库记录的 id 查询，id唯一，故只需返回第一个
  })
};

const newBlog = (data) => {
  const blogData = data || {};
  // blogData就是从请求中得到的对象，包含 title content createtime author等属性
  console.log("controller blogData: ", blogData);
  if (data) {
    const title = blogData.title;
    const content = blogData.content;
    const author = blogData.author;
    const createtime = Date.now();
    const sql = `
      INSERT INTO blogtable(title, content, author, createtime) VALUES (
        "${title}","${content}","${author}","${createtime}"
      );
    `
    console.log(sql);
    return execSql(sql).then((insertResult) => {
      return {
        'insertId': insertResult.insertId,
        'affectedRows': insertResult.affectedRows
      };  //  根据数据库记录的 id 查询，id唯一，故只需返回第一个
    })
  }

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
