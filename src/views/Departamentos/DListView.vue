<template>
  <crud-nav></crud-nav>
  <div id="d-create">
    <listar-departamentos></listar-departamentos>
  </div>
</template>

<script>
import ListarDepartamentos from "@/components/ListarDepartamentos.vue";
import CrudNav from "@/components/CrudNav.vue";
export default {
  name: "TheListView",
  components: {
    ListarDepartamentos,
    CrudNav,
  },
};
</script>
