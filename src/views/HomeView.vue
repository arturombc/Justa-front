<template>
  <main>
    <the-top></the-top>
    <the-reasons></the-reasons>
    <about-us></about-us>
    <the-numbers></the-numbers>
    <the-gallery></the-gallery>
    <client-said></client-said>
    <get-in-contact></get-in-contact>
    <the-testimonials></the-testimonials>
    <the-services></the-services>
    <the-newsletter></the-newsletter>
  </main>
</template>

<script>
import TheServices from "@/components/front-views/TheServices.vue";
import TheNewsletter from "@/components/front-views/TheNewsletter.vue";
import TheTestimonials from "@/components/front-views/TheTestimonials.vue";
import GetInContact from "@/components/front-views/GetInContact.vue";
import ClientSaid from "@/components/front-views/ClientSaid.vue";
import TheGallery from "@/components/front-views/TheGallery.vue";
import TheNumbers from "@/components/front-views/TheNumbers.vue";
import AboutUs from "@/components/front-views/AboutUs.vue";
import TheReasons from "@/components/front-views/TheReasons.vue";
import TheTop from "@/components/front-views/TheTop.vue";
export default {
  name: "HomeView",
  components: {
    TheServices,
    TheNewsletter,
    TheTestimonials,
    GetInContact,
    ClientSaid,
    TheGallery,
    TheNumbers,
    AboutUs,
    TheReasons,
    TheTop,
  },
};
</script>
