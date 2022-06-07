import axios from 'axios';
axios.defaults.headers.common['Cache-Control'] = 'no-cache';
const loginService = {
  login(params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/login', {params}).then(res => {
        console.log(res);
        resolve(res);
      });
    });
  },
  getPlatName() {
    return new Promise((resolve, reject) => {
      axios.get('/api/get/platform').then(res => {
        resolve(res);
      });
    });
  },
  updatePlatName(params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/update/platform', {params}).then(res => {
        console.log(res);
        resolve(res);
      });
    });
  },
  getUserList() {
    return new Promise((resolve, reject) => {
      axios.get('/api/userList').then(res => {
        console.log(res);
        resolve(res);
      });
    });
  },
  addUser(params) {
    return new Promise((resolve, reject) => {
      axios.post('/api/addUser', params).then(res => {
        console.log(res);
        resolve(res);
      });
    });
  }
};

export default loginService;
