<template>
  <div id="nav">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/crud">Abogados</router-link> |
      <router-link to="/d-list">Departamentos</router-link>
    </nav>
  </div>
</template>
<style scoped>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
reate nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
