import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  },
  {
    path: "/product",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue")
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue")
  },
  {
    path: "/shop/*",
    name: "Shop",
    component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue")
  }
];

export default routes;
