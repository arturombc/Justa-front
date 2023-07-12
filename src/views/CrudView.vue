<template>
  <div id="crud">
    <crud-nav></crud-nav>
    <registrar-abogados></registrar-abogados>
    <!-- <listar-abogados></listar-abogados>
    <registrar-departamentos></registrar-departamentos>
    <listar-departamentos></listar-departamentos> -->
  </div>
</template>

<script>
// import ListarAbogados from "@/components/ListarAbogados.vue";
// import ListarDepartamentos from "@/components/ListarDepartamentos.vue";
// import RegistrarDepartamentos from "@/components/RegistrarDepartamentos.vue";
import RegistrarAbogados from "@/components/RegistrarAbogados.vue";
import CrudNav from "@/components/CrudNav.vue";
export default {
  name: "CrudView",
  components: {
    // ListarAbogados,
    // RegistrarDepartamentos,
    // ListarDepartamentos,
    RegistrarAbogados,
    CrudNav,
  },
};
</script>
