<template>
  <div class="shop">
    <h1>This is an about shop page</h1>

    <div id="about-container-shop"></div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";

export default {
  name: "Shop",
  data() {
    return {
      microApp: null
    };
  },
  mounted() {
    console.log("About Shop mount");

    this.microApp = loadMicroApp({
      name: "vueShopApp-sub",
      entry: "//localhost:3003",
      container: "#about-container-shop",
      activeRule: window.__POWERED_BY_QIANKUN_PARENT__ ? "/about/shop" : "/shop"
    });
  },
  beforeDestroy() {
    this.microApp.unmount();
  }
};
</script>
