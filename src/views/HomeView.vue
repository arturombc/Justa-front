<template>
  <main>
    <TheNavbar></TheNavbar>
    <the-top></the-top>
    <the-reasons></the-reasons>
    <about-us></about-us>
    <the-numbers></the-numbers>
    <the-gallery></the-gallery>
    <client-said></client-said>
    <work-with-us></work-with-us>
    <the-testimonials></the-testimonials>
    <the-services></the-services>
    <the-newsletter></the-newsletter>
    <TheFooter></TheFooter>
  </main>
</template>

<script>
import TheNavbar from "@/components/front-views/TheNavbar.vue";
import TheServices from "@/components/front-views/TheServices.vue";
import TheNewsletter from "@/components/front-views/TheNewsletter.vue";
import TheTestimonials from "@/components/front-views/TheTestimonials.vue";
import WorkWithUs from "@/components/front-views/WorkWithUs.vue";
import ClientSaid from "@/components/front-views/ClientSaid.vue";
import TheGallery from "@/components/front-views/TheGallery.vue";
import TheNumbers from "@/components/front-views/TheNumbers.vue";
import AboutUs from "@/components/front-views/AboutUs.vue";
import TheReasons from "@/components/front-views/TheReasons.vue";
import TheTop from "@/components/front-views/TheTop.vue";
import TheFooter from "@/components/front-views/TheFooter.vue";
export default {
  name: "HomeView",
  components: {
    TheServices,
    TheNewsletter,
    TheTestimonials,
    WorkWithUs,
    ClientSaid,
    TheGallery,
    TheNumbers,
    AboutUs,
    TheReasons,
    TheTop,

    TheNavbar,
    TheFooter,
  },
};
</script>
