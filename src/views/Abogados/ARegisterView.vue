<template>
  <crud-nav></crud-nav>
  <div id="a-register">
    <registrar-abogados></registrar-abogados>
  </div>
</template>

<script>
import CrudNav from "@/components/CrudNav.vue";
import RegistrarAbogados from "@/components/RegistrarAbogados.vue";
export default {
  name: "ARegisterView",
  components: {
    CrudNav,
    RegistrarAbogados,
  },
};
</script>
