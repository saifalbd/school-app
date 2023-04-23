
import { createApp } from "vue";
import Welcome from "./Welcome.vue";


import store from './store/index'

window.app = createApp(Welcome);
app.use(store)
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.dateFormat = "YYYY-MM-DD";
import axios from 'axios';




  window.axios = axios;

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    // 'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
};
window.axios.interceptors.request.use(function (config) {
    const main  = store;


    let token = main.state.token;
    if (token) {
     config.headers.Authorization = `Bearer ${token}`;
    } 
    return config;
  }, e=>Promise.reject(e));

 window.axios.interceptors.response.use(response=>response,error=> {
    if (error.response?.status == 401) {
      window.location.href = '/'
    }
    return Promise.reject(error);
  })



window.dropdowns =(slug:string,callBack:Function)=>{
    axios.get(route('api.dropdown',{slug})).then(({data})=>{
        callBack(data)
    })
}






