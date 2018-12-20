<template>
  <Carousel class="carousel" trigger="hover" autoplay v-model="value2" loop>
    <CarouselItem v-for="img in imgs" :key="img.id">
      <div class="demo-carousel">
        <img :src="img.url" alt="carousel_item">
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  mounted() {
    this.http_request.axiosInit(
      this,
      this.request_url.home.carousel.multiple(),
      response => {
        response.data.forEach(carousel => {
          let param = {
            id: carousel.id,
            url: require("@/assets/images/" + carousel.url)
          };
          this.imgs.push(param);
        });
      }
    );
  },
  data() {
    return {
      value2: 0,
      imgs: []
    };
  }
};
</script>

<style scoped>
.carousel img {
  width: 100%;
}
.carousel {
  margin: 20px 0;
}
</style>