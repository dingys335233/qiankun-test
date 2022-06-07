<template>
  <div style="padding: 15px;">
    <h4>平台信息设置</h4>
    <div>
      <el-form>
        <el-form-item label="平台名称" label-width="80">
          <el-input v-model="platName"></el-input>
        </el-form-item>
        <el-button type="primary" size="small" @click="savePlatName">保存</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import loginService from '@/services/index.js';
export default {
  data() {
    return {
      platName: ''
    };
  },
  mounted() {
    loginService.getPlatName().then(res => {
      if (res.data.code === 0) {
        this.platName = res.data.platName;
      }
    })
  },
  methods: {
    savePlatName() {
      loginService.updatePlatName({name: this.platName}).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message);
          this.$store.commit('setPlatName', this.platName)
        } else {
          this.$message.error(res.data.message);
        }
      })
    }
  }
}
</script>
