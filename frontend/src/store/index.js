import Vue from 'vue'
import Vuex from 'vuex'
import palindromo from './modules/palindromo'
import loading from './modules/loading'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {    
    palindromo,
    loading
  },
  strict: debug
})
