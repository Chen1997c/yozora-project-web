<template>
  <Row :gutter="40">
    <Col :span="6" v-for="recommend in recommends" :key="recommend.id">
      <div class="recommend">
        <Tag color="success" class="recommend-tag">Read More +</Tag>
        <div class="recommend-bg">
          <img :src="recommend.bgUrl">
        </div>
      </div>
      <div class="recommend-title">
        <a href="##">{{recommend.title}}</a>
      </div>
      <div class="recommend-desc">{{recommend.desc}}</div>
    </Col>
  </Row>
</template>

<script>
const recommend_bg_url1 = require("@/assets/images/home/hangkong.png");
const recommend_bg_url2 = require("@/assets/images/home/webpackvue.png");
const recommend_bg_url3 = require("@/assets/images/home/wanghuahua.png");
const recommend_bg_url4 = require("@/assets/images/home/powdersnow.png");

export default {
  data() {
    return {
      recommends: [
        {
          id: 1,
          bgUrl: recommend_bg_url1,
          title: "HangKong News",
          desc: "香港第二家线上赌场于8月开始营业！！"
        },
        {
          id: 2,
          bgUrl: recommend_bg_url2,
          title: "前端Plus",
          desc: "webpack和vue不为人知的秘密"
        },
        {
          id: 3,
          bgUrl: recommend_bg_url3,
          title: "Chinese History",
          desc: "王花花在零八年的趣事"
        },
        {
          id: 4,
          bgUrl: recommend_bg_url4,
          title: "Powder Snow",
          desc: "粉雪が空から　優しいと降りてくる"
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped>
.recommend {
  position: relative;
}
.recommend-bg {
  width: 100%;
  height: 165px;
  border: 5px solid #eee;
  border-radius: 5px;
  overflow: hidden;
}
.recommend-bg img {
  display: block;
  height: 100%;
  transition: all 1s ease;
}
.recommend:hover img {
  transform: scale(1.5) rotate(10deg);
}
.recommend-tag {
  position: absolute;
  bottom: 10px;
  right: -15px;
  z-index: 2;
  transition: all 1s ease;
}
.recommend:hover .recommend-tag {
  right: 15px;
}
.recommend-title a {
  font-size: 20px;
  color: #777;
}
.recommend-title a:hover {
  color: #72c02c;
}
</style>