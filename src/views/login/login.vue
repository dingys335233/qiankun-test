<template>
  <div class="login-class">
    <div class="login-header">
      <div class="logo-content">
        <img class="platform-logo" src="../../assets/img/logo.png"/>
        中庆云平台
      </div>
      <div class="title-content">北京中庆现代技术股份有限公司</div>
    </div>
    <div class="login-main">
      <el-form :model="loginForm" ref="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-button" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginService from '@/services/index.js';
export default {
  name: 'login',
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
      this.$router.push({path: '/home'});
      loginService.login({userName:this.loginForm.userName, password: this.loginForm.password}).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message);
          this.$store.commit('setUserName', res.data.userName);
          this.$router.push({path: '/home'});
        } else {
          this.$message.error(res.data.message);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
  @import './login.scss';
</style>
