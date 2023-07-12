<template>
  <div id="container">
    <div id="a-return">
      <router-link to="/abogados-lista">Volver</router-link>
    </div>
    <div id="a-edit">
      <editar-abogados></editar-abogados>
    </div>
  </div>
</template>

<script>
import EditarAbogados from "@/components/EditarAbogados.vue";
export default {
  name: "AEditView",
  components: {
    EditarAbogados,
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
