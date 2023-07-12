<template>
  <div id="container">
    <div id="a-return">
      <router-link to="/departamentos-lista">Volver</router-link>
    </div>
    <div id="a-register">
      <registrar-departamentos></registrar-departamentos>
    </div>
  </div>
</template>

<script>
import RegistrarDepartamentos from "@/components/RegistrarDepartamentos.vue";
export default {
  name: "DRegisterView",
  components: {
    RegistrarDepartamentos,
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh; /* Altura total de la vista */
  position: relative; /* Necesario para la posición absoluta de a-return */
}

#a-register {
  margin-top: 4rem; /* margen superior */
}

#a-return {
  position: absolute;
  top: 1rem; /* margen superior */
  right: 1rem; /* margen derecho */
}
</style>
