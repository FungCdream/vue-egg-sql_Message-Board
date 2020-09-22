'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async list() {
    this.ctx.body = await this.ctx.service.home.list()
  }

  async getmsg() {
    this.ctx.body = await this.ctx.service.home.getmsg()
  }

  async delmsg() {
    this.ctx.body = await this.ctx.service.home.delmsg(this.ctx.request.body)
  }

  async changemsg() {
    this.ctx.body = await this.ctx.service.home.changemsg(this.ctx.request.body)
  }

  async msg() {
    const { ctx } = this;
    // 传过来的数据  console.log(this.ctx.request.query, this.ctx.request.files, this.ctx.request.body)
    //处理前端发送过来的数据
    this.ctx.body =   await this.ctx.service.home.msg(this.ctx.request.body)

  }
}

module.exports = HomeController;
