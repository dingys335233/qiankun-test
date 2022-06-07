<template>
  <div class="application-main-class">
    <div class="application-left-menu">
      <div v-for="(nav, index) in navs" :key="index"
        class="application-menu-card"
        @click="toggleNav(nav)">
        <span>{{nav.name}}</span>
      </div>
    </div>
    <div class="application-right-container">
      <router-view/>
      <div id="mook"></div>
    </div>
  </div>
</template>

<script>
import start from '../../../registerMicroApps.js';
export default{
  name: 'Application',
  data() {
    return {
      navs: [
        { name: '磨课管理', routeName: 'MookConfig' },
        { name: '网络教研', routeName: 'ResourceConfig' }
      ]
    }
  },
  methods: {
    // 切换菜单
    toggleNav(nav) {
      this.$router.push({name: nav.routeName})
    }
  },
  mounted() {
    start();
  }
};
</script>

<style lang="scss" scoped>
  @import "./application-main.scss";
</style>
