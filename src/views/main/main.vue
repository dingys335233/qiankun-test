<template>
  <div>
    <Headers></Headers>
    <div class="main-content">
      <router-view></router-view>
      <div v-if="isHome" id="mook"></div>
      <div v-if="isHome" id="network"></div>
      <div v-if="isHome" id="resources"></div>
      <div v-if="isHome" id="analysis"></div>
    </div>
  </div>
</template>

<script>
import Headers from '../headers/headers.vue';
import start from '../../registerMicroApps.js';
export default {
  data() {
    return {

    };
  },
  computed: {
    isHome() {
      return this.$route.path.indexOf('Application') < 0;
    }
  },
  components: {
    Headers
  },
  methods: {

  },
  mounted() {
    console.log(document.getElementById('mook'));
    start();
  }
};
</script>

<style lang="scss">
.main-content {
  height: calc(100vh - 100px);
}
</style>
