<template>
  <the-navbar></the-navbar>
  <div class="mb-auto col-12" id="not-found">
    <h1>404</h1>
    <h1 class="display-1 fw-bold">Ups... Algo pasó</h1>
    <p class="lead">La página que esta buscando no existe</p>
    <router-link to="/" class="btn btn-primary">Regresar al Home</router-link>
  </div>
</template>

<script>
import TheNavbar from "@/components/front-views/TheNavbar.vue";
export default {
  name: "NotFoundView",
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
#not-found {
  text-align: center;
  margin-top: 10%;
  margin-bottom: 500px;
}
</style>
