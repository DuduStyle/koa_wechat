const Koa = require("koa");
const app = new Koa();

const InitManager = require("./core/init");
// process.cwd();
InitManager.initCore(app);

// 监听服务
app.listen(4000);
