<template>
  <div class="container">
    <Row :gutter="40">
      <template v-if="styleSide">
        <Col :span="6">
          <side-bar v-show="showSide"/>
        </Col>
        <Col :span="mainSize">
          <router-view/>
        </Col>
      </template>
      <template v-else>
        <Col :span="24">
          <router-view @showside="styleSide = true"/>
        </Col>
      </template>
    </Row>
  </div>
</template>
<script>
import sideBar from "@/components/admin/layout/sidebar";
import homeMainContent from "@/components/admin/content/home/mainContent";

export default {
  mounted () {
    if(this.$store.state.token) {
      this.styleSide = true;
    }
  },
  props: ["showSide", "mainSize"],
  components: {
    sideBar,
    homeMainContent,
  },
  data () {
    return {
      styleSide: false
    }
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
