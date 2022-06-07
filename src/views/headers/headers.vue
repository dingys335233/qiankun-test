<template>
  <div class="headers-class">
    <div class="headers-top">
      <div class="header-top-left">
        <img class="header-top-left-img" src="../../assets/img/logo.png" />
        {{platNames || platName}}
      </div>
      <div class="header-top-right">
        <div class="headers-title hover" @click="jumpApplication">应用管理</div>
        <div class="headers-title hover" @click="jumpSystem">系统管理</div>
        <div class="headers-title" @click="toggleLogout"><span class="hover">{{userName}}</span><i class="el-icon-arrow-down"></i>
          <div v-if="showFlag" class="headers-logout" @click.stop="logout">注销</div>
        </div>
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
import loginService from '@/services/index.js';
export default{
  name: 'headers',
  data() {
    return {
      platName: '',
      activeIndex: 0,
      navList: ['首页', 'AI分析', '磨课中心', '网络教研', '资源中心'],
      userName: '管理员',
      showFlag: false
    };
  },
  computed: {
    platNames() {
      return this.$store.state.platName;
    }
  },
  methods: {
    changeNavigation(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        if (index === 0) {
          this.$router.push({path: '/home'});
        }
        if (index === 1) {
          this.$router.push({path: '/analysis'});
        }
        if (index === 2) {
          this.$router.push({path: '/mook'});
        }
        if (index === 3) {
          this.$router.push({path: '/network'});
        }
        if (index === 4) {
          this.$router.push({path: '/resources'});
        }
      }
    },
    jumpSystem() {
      this.$router.push({path: '/System'});
    },
    jumpApplication() {
      this.$router.push({path: '/Application'});
    },
    logout() {
      this.$router.push({path: '/login'});
    },
    toggleLogout() {
      this.showFlag = !this.showFlag;
    }
  },
  mounted() {
    this.userName = this.$store.state.userName;
    loginService.getPlatName().then(res => {
      if (res.data.code === 0) {
        this.platName = res.data.platName;
      }
    })
  }
};
</script>

<style scoped lang="scss">
  @import "./headers.scss";
</style>
