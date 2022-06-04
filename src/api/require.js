import Vue from "vue";
import axios from "axios";

// 配置路径
const require = axios.create({
    // 请求地址
    baseUrl:"",
    // 延迟时间
    timeout:3000,
});
require.interceptors.response.use(
    function (response) {
      
      // 直接 返回 data 数据
      return response.data;
    },
    // 当 错误 时的 回调
    function (error) {
      Toast.clear()
      // console.log("响应错误");
      return Promise.reject(error)
    }
  )
  
  // 添加请求拦截器
  require.interceptors.request.use(
    // 发送 请求 前的回调 可以设置 响应头和一下操作
    function (config) {
    //   设置请求头，告诉服务端不要缓存，获取最新数据
    //   config.headers['If-Modified-Since'] = 0;
      
      // 设置超时时间
      config.timeout = 10000
  
      
      return config
    },
    // 当 错误 时的 回调
    function (error) {
    
      return Promise.reject(error)
    }
  )
  
  export default require;
  