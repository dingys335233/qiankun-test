<template>
  <div class="about">
    <h1>这是一个磨课详情页面</h1>
    <h2>对！你没有猜错！</h2>
    这里有个按钮，调用不同的接口，可以查看接口携带的请求头和cookie是否靠谱！
    <br/><br/><br/>
    <el-button @click="login" type="primary">快戳我！！</el-button>
  </div>
</template>

<script>
import loginService from '@/services/index.js';
export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      }
    };
  },
  methods: {
    // 登录成功！
    login() {
      loginService.checkCookie();
      // this.$router.push({path: '/home'});
    }
  }
};
</script>