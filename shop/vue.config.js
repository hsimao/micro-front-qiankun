const { name } = require("./package");

module.exports = {
  devServer: {
    port: 3003,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/micro-front-qiankun/child/shop/"
      : "/child/shop/"
};
