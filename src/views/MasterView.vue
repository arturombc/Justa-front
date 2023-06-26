<template>
  <TheNavbar></TheNavbar>
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<script>
import TheNavbar from "@/components/front-views/TheNavbar.vue";
import TheFooter from "@/components/front-views/TheFooter.vue";
export default {
  name: "MasterView",
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>
