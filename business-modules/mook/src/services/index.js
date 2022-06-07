import axios from 'axios';

const loginService = {
  login(params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/login', {params}).then(res => {
        console.log(res);
        resolve(res);
      });
    });
  },
  checkCookie() {
    return new Promise((resolve, reject) => {
      axios.get('/api/check/cookie').then(res => {
        console.log(res);
        resolve(res);
      });
    });
  }
};

export default loginService;
