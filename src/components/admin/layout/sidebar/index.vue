<template>
  <Menu width="auto">
    <MenuItem name="0">
      <Icon type="ios-contrast"/>首页
    </MenuItem>
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-home"/>主页管理
      </template>
      <MenuItem @click.native="toHomeMain" name="1-1">
        <Icon type="ios-albums"/>显示内容
      </MenuItem>
      <MenuItem @click.native="toHomeTag" name="1-2">
        <Icon type="ios-pricetag"/>附加内容
      </MenuItem>
      <MenuItem @click.native="toHomeCarousel" name="1-3">
        <Icon type="ios-image"/>轮播图片
      </MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-book"/>Navigation Two
      </template>
      <MenuGroup title="Item 1">
        <MenuItem name="2-1">Option 1</MenuItem>
        <MenuItem name="2-2">Option 2</MenuItem>
      </MenuGroup>
      <MenuGroup title="Item 2">
        <MenuItem name="2-3">Option 3</MenuItem>
        <MenuItem name="2-4">Option 4</MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <Icon type="ios-cog"/>Navigation Three
      </template>
      <MenuItem name="4-1">Option 9</MenuItem>
      <MenuItem name="4-2">Option 10</MenuItem>
      <MenuItem name="4-3">Option 11</MenuItem>
      <MenuItem name="4-4">Option 12</MenuItem>
    </Submenu>
    <MenuItem name="3">
      <Icon type="logo-snapchat"/>用户管理
    </MenuItem>
    <router-link to="login">
    <MenuItem  name="5">
      <Icon type="md-key"/>登录
    </MenuItem>
    </router-link>
  </Menu>
</template>

<script>
export default {
  methods: {
    toHomeMain() {
      this.$router.push("/admin/home-main");
    },
    toHomeTag() {
      this.$router.push("/admin/home-tag");
    },
    toHomeCarousel() {
      this.$router.push("/admin/home-carousel");
    }
  }
};
</script>
