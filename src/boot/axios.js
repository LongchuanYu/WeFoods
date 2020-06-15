import Vue from 'vue'
import axios from 'axios'
import Router from '../router'
import Store from '../store'

// axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.baseURL = 'http://49.234.18.49:9000/'

axios.defaults.timeout = 5000

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = window.localStorage.getItem('wefoods-token')
  if(token){
      config.headers.Authorization = `Bearer ${token}`
  }
  // console.log('request ok..')
  return config
}, function (error) {
  //   console.log('request error...')
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
  // console.log('response ok...')
  return response
},function(error){
  switch (error.response.status){
      case 401:
          Vue.toasted.error('401:Authorization error')
          Store.dispatch('base/logout_action')
          Router.push('/myself').catch(e=>{})
          break;
  }
  return Promise.reject(error)
})




Vue.prototype.$axios = axios 