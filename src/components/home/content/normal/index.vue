<template>
  <div>
    <div class="container" v-for="item in contents" :key="item.id">
      <div class="title">{{item.title}}</div>
      <div class="content">
        <span v-html="item.content"></span>
      </div>
    </div>
    <div class="container">
      <div class="title">推荐浏览</div>
      <div class="content">
        <home-recommend/>
      </div>
    </div>
  </div>
</template>

<script>
import homeRecommend from "@/components/home/content/recommend";

export default {
  mounted() {
    this.http_request.axiosInit(
      this,
      this.request_url.home.content.multiple(1),
      response => {
        this.contents = response.data;
      }
    );
  },
  data() {
    return {
      contents: null
    };
  },
  components: {
    homeRecommend
  }
};
</script>

<style scoped>
.container {
  padding: 25px 50px;
}
.title {
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 4px solid #72c02c;
  font-size: 24px;
  font-weight: bold;
  color: #444;
}
.content {
  font-size: 16px;
  text-indent: 2em;
  margin: 25px 0 50px 0;
}
</style>