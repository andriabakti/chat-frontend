import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    friendList: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    register ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/register`, payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/login`, payload)
          .then((res) => {
            console.log(res)
            commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('id', res.data.result.id)
            router.push('/main/')
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    interceptorsRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorsResponse ({ commit }) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result.message)
        if (error.response.status === 401) {
          console.log(error.response)
          if (error.response.data.result.message === 'Token is invalid') {
            commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('Anda tidak boleh merubah token')
          } else if (error.response.data.result.message === 'Token is expired') {
            commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/login')
            alert('Session telah habis, silahkan login kembali')
          }
        }
        return Promise.reject(error)
      })
    },
    toLogout ({ commit }) {
      localStorage.removeItem('token')
      commit('setToken', null)
      router.push('/login')
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    getUserId (state) {
      return state.user.id || localStorage.getItem('id')
    },
    getFriend (state) {
      return state.friendList
    }
  },
  modules: {
  }
})
