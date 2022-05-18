<template>
  <div class="headers-class">
    <div class="headers-top">
      <div class="header-top-left">
        <img class="header-top-left-img" src="../../assets/img/logo.png" />
        中庆云平台
      </div>
      <div class="header-top-right">
        <div class="headers-title hover">应用管理</div>
        <div class="headers-title hover">系统管理</div>
        <div class="headers-title"><span class="hover">登录</span> | <span class="hover">注册</span></div>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="headers-navigations">
      <div v-for="(nav, index) in navList"
        :key="index"
        class="each-nav hover"
        :class="{'active-nav': activeIndex === index}"
        @click="changeNavigation(index)">
        {{nav}}
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'headers',
  data() {
    return {
      activeIndex: 0,
      navList: ['首页', 'AI分析', '磨课中心', '网络教研', '资源中心']
    };
  },
  methods: {
    changeNavigation(index) {
      this.activeIndex = index;
      if (index === 3) {
        this.$router.push({path: '/mook'});
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "./headers.scss";
</style>
