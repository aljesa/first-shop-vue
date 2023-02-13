<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/layout/Header.vue";
import Breadcrumbs from "./components/reusable/Breadcrumbs.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  components: {
    Header,
    Breadcrumbs,
    Footer
  }
}

</script>

<template>
  <Header />
  <!-- <Breadcrumbs /> -->
  <RouterView />
  <Footer />
</template>
