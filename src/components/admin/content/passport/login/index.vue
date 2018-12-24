<template>
  <div id="login">
    <Card>
      <Form ref="loginForm" :model="user" :rules="loginRule" label-position="top">
        <FormItem prop="username" label="用户名/邮箱">
          <Input v-model.trim="user.username"></Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input v-model="user.password"></Input>
        </FormItem>
        <FormItem>
          <Button
            @click="loginValidate('loginForm')"
            :loading="loginLoading"
            type="success"
            size="large"
            ghost
            long
          >登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  created() {
    if (this.$store.state.token) {
      this.$router.push("/admin");
    }
  },
  mounted() {
    document.onkeyup = e => {
      if (window.event.keyCode == 13) {
        this.loginValidate("loginForm");
      }
    };
  },
  data() {
    return {
      loginLoading: false,
      loginRule: {
        username: [
          {
            required: true,
            message: "用户名不能为空"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空"
          }
        ]
      },
      user: {
        username: "",
        password: "",
        grant_type: "password"
      }
    };
  },
  methods: {
    loginValidate(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.subLogin();
        } else {
          this.$Message.error("输入参数不符合规范!");
        }
      });
    },
    subLogin() {
      this.loginLoading = true;
      this.axios({
        url: this.request_url.home.login.valid(),
        method: "post",
        data: this.user,
        transformRequest: [
          data => {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        headers: {
          Authorization: "Basic d2ViYXBwOndlYmFwcA==",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(res => {
          this.$store.commit("setToken", res.data.access_token);
          this.$emit("showside");
          this.$router.push("/admin");
        })
        .catch(error => {
          this.$Message.error("用户名或密码错误");
        })
        .finally(() => {
          this.loginLoading = false;
        });
    }
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


