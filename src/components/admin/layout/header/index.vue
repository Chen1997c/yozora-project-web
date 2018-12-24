<template>
  <div id="admin">
    <header class="header">
      <div class="logo">
        <a href="http://localhost:8080/admin">
          <img src="@/assets/images/home/logo.png" alt="admin-logo">
        </a>
        <div @click="toggleSide" class="side-toggle">
          <Icon type="md-list"/>
        </div>
      </div>
      <ul class="header-tags">
        <template v-if="$store.state.token">
          <li class="tag-item">
            <Poptip word-wrap width="300">
              <a href="#">
                <Icon type="ios-notifications-outline" size="26"/>提醒
                <Badge :count="99"/>
              </a>
              <div slot="content">
                <div class="header-list-title">您有<span style="color:red">5</span>条提醒
                </div>
                <a class="header-list">要么活着死，要么死着生，风萧萧兮易水寒，壮士一去兮不复还。
                  <div class="header-list-time">15小时前</div>
                </a>
                <a class="header-list">要么活着死，要么死着生，风萧萧兮易水寒，壮士一去兮不复还。
                  <div class="header-list-time">15小时前</div>
                </a>
                <a class="header-list">要么活着死，要么死着生，风萧萧兮易水寒，壮士一去兮不复还。
                  <div class="header-list-time">15小时前</div>
                </a>
              </div>
            </Poptip>
          </li>
          <li class="tag-item">
            <Poptip word-wrap width="300">
              <a href="#">
                <Icon type="ios-mail-outline" size="26"/>消息
                <Badge :count="99" type="success"/>
              </a>
              <div slot="content">
                <div class="header-list-title">您有<span style="color:green">5</span>条新消息
                </div>
                <a class="header-list">要么活着死，要么死着生，风萧萧兮易水寒，壮士一去兮不复还。
                  <div class="header-list-time">Mike 15小时前</div>
                </a>
                <a class="header-list">要么活着死，要么死着生，风萧萧兮易水寒，壮士一去兮不复还。
                  <div class="header-list-time">Lee 15小时前</div>
                </a>
                <a class="header-list">要么活着死，要么死着生，风萧萧兮易水寒，壮士一去兮不复还。
                  <div class="header-list-time">Jerry 15小时前</div>
                </a>
              </div>
            </Poptip>
          </li>
          <li class="tag-item">
            <Dropdown>
              <a href="#">欢迎你,Administator</a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <Icon type="md-person"/>个人信息
                </DropdownItem>
                <DropdownItem divided>
                  <Icon type="ios-exit"/>退出
                </DropdownItem>
                <DropdownItem divided>...</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li class="tag-item">
            <a href="#">
              <Icon type="md-exit"/>退出
            </a>
          </li>
        </template>
        <template v-else>
          <li class="tag-item">
            <a href="javascript:;" @click="toLogin">
              <Icon type="md-key"/>登录
            </a>
          </li>
        </template>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSide() {
      this.$emit("listclick");
    },
    toLogin() {
      this.$router.push('/admin/login');
    }
  }
};
</script>

<style scoped>
.header {
  padding: 15px 35px;
  overflow: auto;
  color: #888;
}
.logo {
  float: left;
}
.logo img {
  position: relative;
  top: 7px;
  width: 50%;
}
.side-toggle {
  display: inline-block;
  font-size: 30px;
}
.header-tags {
  float: right;
  padding-top: 15px;
  list-style: none;
  font-size: 15px;
  overflow: auto;
}
.tag-item {
  float: left;
  padding: 0 10px;
}
.tag-item :hover {
  color: #444;
}
.tag-item a {
  color: #888;
}

.header-list-title {
  height: 10px;
  padding: 10px 0;
  font-size: 14px;
  color: #666;
}

.header-list {
  display: block;
  position: relative;
  padding: 10px 10px 0 10px;
  border-top: 1px solid #eee;
}

.header-list:hover {
  background: #eee;
  color: #444;
}

.header-list-time {
  position: absolute;
  bottom: 2px;
  right: 15px;
}
</style>

