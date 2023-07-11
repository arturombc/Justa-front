<template>
  <div id="bd">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/crud">Abogados</router-link> |
    </nav>
    <listar-abogados></listar-abogados>
    <registrar-abogados></registrar-abogados>
    <registrar-departamentos></registrar-departamentos>
    <listar-departamentos></listar-departamentos>
  </div>
</template>

<script>
import ListarAbogados from "@/components/ListarAbogados.vue";
import ListarDepartamentos from "@/components/ListarDepartamentos.vue";
import RegistrarAbogados from "@/components/RegistrarAbogados.vue";
import RegistrarDepartamentos from "@/components/RegistrarDepartamentos.vue";
export default {
  name: "CrudView",
  components: {
    ListarAbogados,
    RegistrarAbogados,
    RegistrarDepartamentos,
    ListarDepartamentos,
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
