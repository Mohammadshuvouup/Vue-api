import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate"
import BLOCKAPI from '@/store/modules/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  
  modules: {
    BLOCKAPI
  }
})
