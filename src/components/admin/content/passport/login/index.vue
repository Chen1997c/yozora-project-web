<template>
  <div id="login">
    <Card>
      <Form :model="formLeft" label-position="top">
        <FormItem label="用户名/邮箱">
          <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem>
          <Button type="success" size="large" ghost long>登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      formLeft: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  }
};
</script>
<style scoped>
#login {
  /* background: #334054; */
  margin: 70px auto;
  width: 350px;
}
</style>


