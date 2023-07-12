<template>
  <div id="a-create">
    <crud-nav></crud-nav>
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
import CrudNav from "@/components/CrudNav.vue";
export default {
  name: "CrudView",
  components: {
    ListarAbogados,
    RegistrarAbogados,
    RegistrarDepartamentos,
    ListarDepartamentos,
    CrudNav,
  },
};
</script>
