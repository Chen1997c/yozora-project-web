<template>
  <header class="header">
    <Row class="nav">
      <Col span="8">
        <img src="@/assets/images/home/logo.png">
      </Col>
      <Col span="16" class="nav-content">
        <Col :span="4" class="nav-li">
          <a href="/">首页
            <br>Home
          </a>
        </Col>
        <Col :span="4" class="nav-li">
          <a>博客文摘
            <br>BlogArticle
          </a>
        </Col>
        <Col :span="4" class="nav-li">
          <a>壁纸流
            <br>WallpaperFlow
          </a>
        </Col>
        <Col :span="4" class="nav-li">
          <a>毕业设计
            <br>GraduationProject
          </a>
        </Col>
        <Col :span="4" class="nav-li">
          <router-link to="/admin">
            <a>后台管理
              <br>Seal
            </a>
          </router-link>
        </Col>
      </Col>
    </Row>
    <div class="nav-line"></div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
}
.nav {
  padding: 3em 3em 0 3em !important;
  text-align: center;
}
.nav a {
  color: #444 !important;
  font-size: 15px;
}
.nav-content {
  height: 100%;
  margin-top: 25px;
  z-index: 2;
}
.nav-li {
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
}
.nav-li:hover {
  border-bottom: 2px solid #72c02c;
}
.nav-li:hover a {
  color: #72c02c !important;
}
.nav-line {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #999;
}
</style>