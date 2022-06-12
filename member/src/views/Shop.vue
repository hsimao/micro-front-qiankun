<template>
  <div class="shop">
    <h1>This is an member shop page</h1>

    <div id="member-container-shop"></div>
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
    this.microApp = loadMicroApp({
      name: "vueShopApp-sub",
      entry: "//localhost:3003",
      container: "#member-container-shop",
      activeRule: window.__POWERED_BY_QIANKUN_PARENT__
        ? "/member/shop"
        : "/shop"
    });
  },
  beforeDestroy() {
    this.microApp.unmount();
  }
};
</script>
