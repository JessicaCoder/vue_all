import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'
import Less from 'Less'
import axios from 'axios'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import Loading from './components/loading'
import $ from 'jquery'
require('./assets/css/base.css'); //全局引入
Vue.use(Less);
Vue.use(VueRouter); 
 Vue.use(Loading); 
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/images/err.png'),
    loading: require('./assets/images/loading.gif'),
    attempt: 1,
    listenEvents: ['scroll']
});
const router = new VueRouter({
    mode: 'history',
    routes
});
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//拦截器
axios.interceptors.request.use(function(config) { //配置发送请求的信息
    store.dispatch('showLoading');
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
    store.dispatch('hideLoading');
    return response;
}, function(error) {
    return Promise.reject(error);
});
axios.defaults.baseURL = 'http://192.168.16.249:3333/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
