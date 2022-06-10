<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about"> About</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/about/product-sub">About product-sub</router-link>
    </div>

    <div id="container"></div>

    <router-view />
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
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
