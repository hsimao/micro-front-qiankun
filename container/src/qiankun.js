import { registerMicroApps, start } from "qiankun";

// 由於本身有window.__POWERED_BY_QIANKUN__參數，sub應用無法判斷自己在第幾層
// 設置一個全局參數，讓sub應用檢測到該參數則說明自己作為孫子應用運行
window.__POWERED_BY_QIANKUN_PARENT__ = true;

registerMicroApps(
  [
    {
      name: "vueMemberApp",
      entry:
        process.env.NODE_ENV === "production"
          ? "/child/member/"
          : "//localhost:3001/child/member/",
      container: "#container",
      activeRule: "/member"
    },
    {
      name: "reactProductApp",
      entry:
        process.env.NODE_ENV === "production"
          ? "/child/product/"
          : "//localhost:3002/child/product/",
      container: "#container",
      activeRule: "/product"
    },
    {
      name: "vueShopApp",
      entry:
        process.env.NODE_ENV === "production"
          ? "/child/shop/"
          : "//localhost:3003/child/shop/",
      container: "#container",
      activeRule: "/shop"
    },
    {
      name: "nuxt-subapp",
      entry:
        process.env.NODE_ENV === "production"
          ? "/child/nuxt/"
          : "//localhost:7102/",
      container: "#container",
      activeRule: "/nuxt"
    }
  ],
  {
    beforeLoad: (app) => {
      console.log("before load app.name: ", app.name);
    },
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] beforeMount %c%s", "color: green;", app.name);
      }
    ],
    afterMount: [
      (app) => {
        console.log("[LifeCycle] afterMount %c%s", "color: green;", app.name);
      }
    ],
    afterUnmount: [
      (app) => {
        console.log("[LifeCycle] afterUnmount %c%s", "color: green;", app.name);
      }
    ]
  }
);

start();
