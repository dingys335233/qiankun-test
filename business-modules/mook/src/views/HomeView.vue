<template>
  <div class="home">
    <div class="mook-card">
      <div>这就是个磨课的卡片，不容反驳！</div>
      <router-link :to="{name: 'about'}">快点我！！！！！</router-link>
    </div>
  </div>
</template>

<script>
import actions from '../actions';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    actions.onGlobalStateChange((state) => {
        console.log('传递的数据：', state);
        if (JSON.stringify(state) !== '{}') {
            axios.defaults.headers.common['globalToken'] = state.globalToken;
            this.$store.commit('setGlobalToken', state.globalToken);
        }
    }, true);
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 90px);
  background: url(../assets/home.gif) no-repeat center;
  background-size: cover;
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  color: rgb(228, 54, 83);
  padding: 50px;
  box-sizing: border-box;
  .mook-card {
    width: 400px;
    height: 150px;
    border-radius: 30px;
    background: #fff;
    margin: 0 auto;
    padding: 50px 0;
  }
}
</style>
