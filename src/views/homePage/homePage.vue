<template>
  <div class="homepage-class">
    我说这是个首页，你还不信！！
  </div>
</template>

<script>
export default{
  name: 'homePage'
};
</script>

<style lang="scss" scoped>
.homepage-class {
  height: calc(100vh - 90px);
  background: url(../../assets/img/home.gif) no-repeat center;
  background-size: cover;
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  color: rgb(228, 54, 83);
  padding: 200px;
  box-sizing: border-box;
}
</style>
