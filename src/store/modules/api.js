import axios from '@/axios'

const state = {}
const getters = {}
const mutations = {}
const actions = {
  FETCH_ALL_CATEGORIES: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/categories/list?token={{token}}").get()
      return data
    } catch (e) {
      console.log("Error-store-categories-actions-FETCH_ALL_CATEGORIES", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  FETCH_RANKING_LIST: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/ranking/list?token={{token}}").get()
      return data
    } catch (e) {
      console.log("Error-store-ranking-actions-FETCH_RANKING_LIST", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  FETCH_BTOKEN_LIST: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/btokens/list?token={{token}}").get()
      return data
    } catch (e) {
      console.log("Error-store-btokens-actions-FETCH_BTOKEN_LIST", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  FETCH_SERVER_LIST: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/rcps/list?token={{token}}").get()
      return data
    } catch (e) {
      console.log("Error-store-rcps-actions-FETCH_SERVER_LIST", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  FETCH_CATEGORY_DETAILS: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/projects/category/"+ payload).get()
      return data
    } catch (e) {
      console.log("Error-store-rcps-actions-FETCH_CATEGORY_DETAILS", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  FETCH_TAGS: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/tags/list?token={{token}}").get()
      return data
    } catch (e) {
      console.log("Error-store-rcps-actions-FETCH_TAGS", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  FETCH_TAG_DETAILS: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/projects/tag/" + payload + "?token={{token}}").get()
      return data
    } catch (e) {
      console.log("Error-store-rcps-actions-FETCH_CATEGORY_DETAILS", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
  COUNTER: async ({commit}, payload) => {
    try {
      let { data } = await axios.reqApi("/projects/counter/?token=x").get()
      return data
    } catch (e) {
      console.log("Error-store-rcps-actions-COUNTER", e.response.data)
      return Promise.reject(e.response.data)
    }
  },
}

export default {
  namespaced: true,
  state, getters, mutations, actions
}