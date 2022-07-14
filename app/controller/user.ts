import { Controller } from 'egg';

export default class UserController extends Controller {

  // 获取用户的所有信息,包括已经解锁的鱼，已经发现的鱼，已经解锁的海域
  public async getUserInfo() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  // 用户发现一条鱼
  public async findOneFish() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  // 用户杀死了一条鱼
  public async killOneFish() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  // 用户解锁了一个海域
  public async unlockOcean() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  // 设置这条鱼是正在使用的鱼
  public async usingFish() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
