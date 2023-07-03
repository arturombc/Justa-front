<template>
  <div id="bd">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/crud">CRUD</router-link> |
      <router-link to="/query">Queries</router-link> |
      <router-link to="/sql">SQL</router-link>
    </nav>
    <the-crud></the-crud>
  </div>
</template>

<script>
import TheCrud from "@/components/TheCrud.vue";
export default {
  name: "CrudView",
  components: {
    TheCrud,
  },
};
</script>

<style scoped>
#bd {
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
