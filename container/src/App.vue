<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about/contact">Contact</router-link> |
      <router-link to="/about/product">About Product</router-link> |
      <router-link to="/about/shop/">About Shop</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/profile">Profile</router-link>
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
</style>
