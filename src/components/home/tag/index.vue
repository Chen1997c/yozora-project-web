<template>
  <div class="tag">
    <Row :gutter="40">
      <Col v-for="tag in tags" :span="16" :key="tag.id">
        <div class="tag-item-title">{{tag.title}}</div>
        <div class="tag-item-content">
          <span v-html="tag.content"></span>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.http_request.axiosInit(
      this,
      this.request_url.home.content.multiple(2),
      response => {
        this.tags = response.data;
      }
    );
  },
  data() {
    return {
      tags: []
    };
  }
};
</script>

<style>
.tag {
  padding: 25px 80px;
  background: #555;
}
.tag-item-title {
  display: inline-block;
  margin-bottom: 15px;
  border-bottom: 3px solid #72c02c;
  color: #eee;
  font-size: 25px;
}
.tag-item-content {
  color: #ccc;
  font-size: 14px;
  margin-bottom: 15px;
}
</style>