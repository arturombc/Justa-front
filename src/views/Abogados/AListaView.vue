<template>
  <crud-nav></crud-nav>
  <div id="a-lista">
    <listar-abogados></listar-abogados>
  </div>
</template>

<script>
import CrudNav from "@/components/CrudNav.vue";
import ListarAbogados from "@/components/ListarAbogados.vue";
export default {
  name: "AListaView",
  components: {
    CrudNav,
    ListarAbogados,
  },
};
</script>
