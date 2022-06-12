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
      entry:
        process.env.NODE_ENV === "production"
          ? "/child/shop/"
          : "//localhost:3003/child/shop/",
      container: "#member-container-shop",
      activeRule: "/member/shop"
    });
  },
  beforeDestroy() {
    this.microApp.unmount();
  }
};
</script>
