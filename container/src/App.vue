<template>
  <div id="app">
    <div id="nav">
      <div class="nav__item">
        <p>主應用</p>
        ： <router-link to="/">Home</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="nav__item">
        <p>Member 子應用</p>
        ： <router-link to="/member">Member</router-link> |
        <router-link to="/member/profile">Profile</router-link> |
        <router-link to="/member/product">嵌套子應用 Product</router-link> |
        <router-link to="/member/shop/">嵌套子應用 Shop</router-link>
      </div>
      <div class="nav__item">
        <router-link to="/product">子應用 Product</router-link> |
        <router-link to="/shop">子應用 Shop</router-link> |
        <router-link to="/nuxt">子應用 Nuxt</router-link>
      </div>
    </div>

    <p>globalState from container</p>
    <pre>{{ getGlobalState }}</pre>

    <button @click="handleAdd">count++</button>
    <br />
    <label for="">
      name:
      <input
        type="text"
        :value="getGlobalState.name"
        @input="handleChangeName"
      />
    </label>

    <div id="container"></div>

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { globalActions } from "./store";

export default {
  name: "App",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(["getGlobalState"])
  },
  methods: {
    handleAdd() {
      const currentCount = this.getGlobalState.count;
      globalActions.setGlobalState({ count: currentCount + 1 });
    },
    handleChangeName(event) {
      globalActions.setGlobalState({ name: event.target.value });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#container {
  width: 80%;
  margin: 0 auto;
}

#nav .nav__item {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
}

#nav .nav__item p {
  margin: 0;
}

#nav .nav__item a {
  padding: 0 10px;
}
</style>
