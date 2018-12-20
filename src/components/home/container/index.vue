<template>
  <div id="home">
    <home-header></home-header>
    <home-carousel></home-carousel>
    <home-content></home-content>
    <home-tag></home-tag>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from "@/components/home/header";
import homeCarousel from "@/components/home/carousel";
import homeContent from "@/components/home/content/normal";
import homeTag from "@/components/home/tag";
import homeFooter from "@/components/home/footer";
export default {
  components: {
    homeHeader,
    homeCarousel,
    homeContent,
    homeFooter,
    homeTag
  }
};
</script>

<style scoped>
#home {
  min-width: 1000px;
}
</style>