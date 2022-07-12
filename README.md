# 一个机遇KOA2的无状态WebServer


## QuickStart
    使用TS开发

## 依赖的库有：
    loadsh // 用来做数据查询聚合的库，效率非常高
    Mongoose // 是在node.js异步环境下对mongodb进行便捷操作的对象模型工具
    JsonWebToken //一个开放标准协议，用于各方之间作为JSON对象安全地传输信息。


### 开发模式下

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### 依赖

- Node.js 8.x
- Typescript 2.8+
