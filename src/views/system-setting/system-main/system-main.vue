<template>
  <div class="system-main-class">
    <div class="system-left-menu">
      <div v-for="(nav, index) in navs" :key="index"
        class="system-menu-card"
        @click="toggleNav(nav)">
        <span>{{nav.name}}</span>
      </div>
    </div>
    <div class="system-right-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default{
  name: 'SystemMain',
  data() {
    return {
      navs: [
        { name: '平台信息', link: '/System/PlatformInfo' },
        { name: '用户管理', link: '/System/UserManage' },
        { name: '功能模块', link: '/System/Functions' },
      ]
    }
  },
  methods: {
    // 切换菜单
    toggleNav(nav) {
      this.$router.push({path: nav.link})
    }
  },
  created() {
    if (this.$route.path === '/System') {
      this.$router.push({path: this.navs[0].link});
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "./system-main.scss";
</style>
