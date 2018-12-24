<template>
  <Breadcrumb style="margin-bottom:20px">
    <BreadcrumbItem to="/admin">
      <Icon type="ios-home-outline"></Icon>首页
    </BreadcrumbItem>
    <BreadcrumbItem>{{itemName1}}</BreadcrumbItem>
    <BreadcrumbItem>{{itemName2}}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  props: ["itemName1", "itemName2"]
};
</script>

