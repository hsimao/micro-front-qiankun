<template>
  <div id="about-app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/product">About nested product</router-link> |
      <router-link to="/shop">About nested Shop</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "AboutApp"
};
</script>

<style scoped>
#about-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #53bf9d;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#about-app #nav a.router-link-exact-active {
  color: white;
}
</style>
