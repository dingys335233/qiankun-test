<template>
  <div>
    <Headers></Headers>
    <router-view></router-view>
    <div id="mook"></div>
  </div>
</template>

<script>
import Headers from '../headers/headers.vue';
export default {
  data() {
    return {

    };
  },
  components: {
    Headers
  },
  methods: {

  }
};
</script>
