<template>
  <div class="container">
    <Row :gutter="40">
      <Col :span="6">
        <side-bar v-if="show" v-show="showSide"/>
      </Col>
      <Col :span="mainSize">
        <router-view/>
      </Col>
    </Row>
  </div>
</template>
<script>
import sideBar from "@/components/admin/layout/sidebar";
import homeMainContent from "@/components/admin/content/home/mainContent";

export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    let current_url = document.location.href;
    if (current_url.indexOf("login") != -1) {
      this.show = false;
      this.$emit("hideside");
    }
  },
  props: ["showSide", "mainSize"],
  components: {
    sideBar,
    homeMainContent
  }
};
</script>
<style scoped>
.container {
  padding: 20px;
  background: rgb(245, 245, 245);
  min-height: 1000px;
}
</style>
