<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/product-sub">About nested product</router-link>
    </div>
    <h1 class="title">Sub App Vue About</h1>
    <p>containerState</p>
    <pre>{{ getContainerState }}</pre>

    <button @click="handleAdd">count++</button>
    <label for="">
      name:
      <input
        type="text"
        :value="getContainerState.name"
        @input="handleChangeGlobalStateName"
      />
    </label>
    <div id="container-sub"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AboutApp",
  computed: {
    ...mapGetters(["getContainerState"])
  },

  methods: {
    handleAdd() {
      const currentCount = this.getContainerState.count;
      this.$store.setGlobalState({ count: currentCount + 1 });
    },
    handleChangeGlobalStateName(event) {
      this.$store.setGlobalState({ name: event.target.value });
    }
  }
};
</script>

<style>
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
</style>
