<template>
  <crud-nav></crud-nav>
  <div id="d-register">
    <registrar-departamentos></registrar-departamentos>
  </div>
</template>

<script>
import CrudNav from "@/components/CrudNav.vue";
import RegistrarDepartamentos from "@/components/RegistrarDepartamentos.vue";
export default {
  name: "DRegisterView",
  components: {
    CrudNav,
    RegistrarDepartamentos,
  },
};
</script>
