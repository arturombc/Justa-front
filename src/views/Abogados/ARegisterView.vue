<template>
  <div id="container">
    <div id="a-return">
      <router-link to="/abogados-lista">Volver</router-link>
    </div>
    <div id="a-register">
      <registrar-abogados></registrar-abogados>
    </div>
  </div>
</template>

<script>
import RegistrarAbogados from "@/components/RegistrarAbogados.vue";
export default {
  name: "ARegisterView",
  components: {
    RegistrarAbogados,
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
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
