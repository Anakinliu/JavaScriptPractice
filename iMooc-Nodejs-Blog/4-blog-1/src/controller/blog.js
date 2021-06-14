const { execSql } = require('../db/mysql');

// 所有blog
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

// blog详情
const getDeatil = (id) => {
  // 先不进行 sql 是否合法的检查
  const sql = `SELECT * FROM blogtable WHERE id=${id}`;
  return execSql(sql).then((rowsResult) => {
    return rowsResult[0];  //  根据数据库记录的 id 查询，id唯一，故只需返回第一个
  })
};

// 新建blog
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

// 更新blog
const updateBlog = (id, data) => {
  console.log('updateBlog ', id, data);
  if (id && data) {
    const blogID = id;
    const blogData = data;

    const title = blogData.title;
    const content = blogData.content;
    const sql = `
      UPDATE blogtable SET title="${title}", content="${content}" WHERE id=${blogID};
    `
    console.log(sql);
    return execSql(sql).then((updateResult) => {
      console.log(updateResult);
      if (updateResult.affectedRows > 0) {
        return true;
      }
      return false;
    })
  }
};

// 删除 blog
const deleteBlog = (blogID, author) => {
  console.log('deleteBlog ', blogID, author);
  if (blogID && author) {
    const sql = `
      DELETE FROM blogtable WHERE id=${blogID} AND author="${author}";
    `;
    console.log(sql);
    return execSql(sql).then((delResult) => {
      console.log(delResult);
      if (delResult.affectedRows > 0) {
        return true;
      }
      return false;
    })
  }
};

module.exports = {
  getList,
  getDeatil,
  newBlog,
  updateBlog,
  deleteBlog,
};
