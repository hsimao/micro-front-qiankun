<template>
  <div class="product">
    <h1>This is an member product page</h1>

    <div id="member-container-product"></div>
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
      container: "#member-container-product",
      activeRule: window.__POWERED_BY_QIANKUN_PARENT__
        ? "/member/product"
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
