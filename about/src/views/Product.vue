<template>
  <div class="product">
    <h1>This is an about product page</h1>

    <div id="about-container-product"></div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";

export default {
  name: "Product",
  data() {
    return {
      microApp: null
    };
  },
  mounted() {
    this.microApp = loadMicroApp({
      name: "reactProductApp-sub",
      entry: "//localhost:3002",
      container: "#about-container-product",
      activeRule: window.__POWERED_BY_QIANKUN_PARENT__
        ? "/about/product"
        : "/product"
    });
  },
  beforeDestroy() {
    this.microApp.unmount();
  }
};
</script>

<style>
#about-container-product {
  width: 80%;
  margin: 0 auto;
}
</style>
