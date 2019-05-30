import {LOADING_SHOW,LOADING_HIDE} from '../actions/loading';

const state = {loading:false,blockpage:true}

const getters = {   
    isLoading: state => state.loading,
    isToBlockPage: state=>state.blockpage
}

const actions = {    
    [LOADING_SHOW]:({commit},blockpage = true) =>{
        commit(LOADING_SHOW,blockpage)
    },
    [LOADING_HIDE]:({commit}) =>{
        commit(LOADING_HIDE)
    }
}

const mutations = {    
    [LOADING_SHOW]: (state,payload) =>{
        state.loading = true
        state.blockpage = payload
    },
    [LOADING_HIDE]: (state) =>{
        state.loading = false
        state.blockpage = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
  }
  