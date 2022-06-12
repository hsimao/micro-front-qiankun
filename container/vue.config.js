module.exports = {
  devServer: {
    port: 3000
  },
  // 部署位置 github page 根目錄 /micro-front-qiankun/
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
};
