<template>
  <div id="member-app">
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
  name: "MemberApp"
};
</script>

<style scoped>
#member-app {
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

#member-app #nav a.router-link-exact-active {
  color: white;
}
</style>
