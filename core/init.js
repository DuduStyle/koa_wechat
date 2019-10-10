const Router = require("koa-router");
// 自动加载代码
const requireDirectory = require("require-directory");

class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
  }
  // 加载路由
  static initLoadRouters() {
    requireDirectory(module, `${process.cwd()}/app/api`, {
      visit: whenLoadModule
    });

    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
  }
}
module.exports = InitManager;
