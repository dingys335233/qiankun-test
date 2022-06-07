<template>
  <div>
    <el-button @click="isAdd = false">新建 + </el-button>
    <el-table v-if="isAdd" :data="userList">
      <el-table-column label="账号" prop="userCount"></el-table-column>
      <el-table-column label="姓名" prop="userName"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-else>
      账号：<el-input v-model="addForm.count"></el-input>
      用户名：<el-input v-model="addForm.name"></el-input>
      密码：<el-input v-model="addForm.password"></el-input>
      年龄：<el-input v-model="addForm.age"></el-input>
      <el-button @click="insertUser">创建</el-button>
    </div>
  </div>
</template>

<script>
import loginService from '@/services/index.js';

export default {
  name: 'UserManage',
  data() {
    return {
      isAdd: true,
      userList: [],
      addForm: {
        id: '',
        name: '',
        count: '',
        age: 0,
        password: ''
      }
    }
  },
  methods: {
    insertUser() {
      this.addForm.id = (parseInt(Math.random() * 100000)).toString();
      loginService.addUser(this.addForm).then(res => {
        if (res.data.code === 0) {
          this.$message.success(res.data.message);
          this.isAdd = true;
          this.getUserList();
        }
      });
    },
    getUserList() {
      loginService.getUserList().then(res => {
        if (res.data.code === 0) {
          this.userList = res.data.list;
        }
      });
    }
  },
  mounted() {
    this.getUserList();
  }
};
</script>
