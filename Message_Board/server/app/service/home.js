'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 打开展示留言列表
  async list() {
    const sql = `select * from msg`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  // 插入留言
  async msg(msg) {
    var sql = `insert into msg (word) values ("${msg.word}")`
    var results1 = await this.app.mysql.query(sql)
    console.log(results1.affectedRows)
  }

  // 获取留言
  async getmsg() {
    const sql = `select * from msg`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  // 更改留言
  async changemsg(cmsg) {
    const sql = `update msg set word ='${cmsg.word2}' where word ='${cmsg.word}'`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  // 删除留言
  async delmsg(cmsg) {
    const sql = `delete from msg where id=${cmsg.id};`
    const data = await this.app.mysql.query(sql);
    return data;
  }




}



module.exports = HomeService;
