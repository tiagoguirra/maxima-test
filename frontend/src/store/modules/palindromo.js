import { ERRORS_SHOW } from "../actions/errors";
import {
    PALINDROMO_FETCH,
    PALINDROMO_REQUEST,
    PALINDROMO_ANALIZE
} from '../actions/palindromo'

import { LOADING_SHOW, LOADING_HIDE } from "../actions/loading";
import APIService from "../../service/apiService";

const baseURI = "palindromo";
const state = {list:[]}

const getters = {
    getPalindromos: state => state.list    
}

const actions = {
    [PALINDROMO_FETCH]: ({commit,dispatch},filters)=>{
        return new Promise((resolve,reject)=>{
            dispatch(LOADING_SHOW)
            APIService.get(`${baseURI}${filters}`).then(resp=>{                
                commit(PALINDROMO_FETCH,resp.data.data)
                dispatch(LOADING_HIDE)
                resolve(resp.data.data)
            })
            .catch(err=>{
                dispatch(LOADING_HIDE)                
                dispatch(ERRORS_SHOW, err);
                reject(err)
            })
        })
    },
    [PALINDROMO_REQUEST]: ({commit,dispatch},param)=>{
        return new Promise((resolve,reject)=>{
            dispatch(LOADING_SHOW)
            APIService.get(`${baseURI}/${param}`).then(resp=>{                                
                dispatch(LOADING_HIDE)
                resolve(resp.data.data)
            })
            .catch(err=>{
                dispatch(LOADING_HIDE)                
                dispatch(ERRORS_SHOW, err);
                reject(err)
            })
        })
    },
    [PALINDROMO_ANALIZE]: ({commit,dispatch},body)=>{
        return new Promise((resolve,reject)=>{
            dispatch(LOADING_SHOW)
            APIService.post(`${baseURI}`,body).then(resp=>{                                
                dispatch(LOADING_HIDE)
                resolve(resp.data.data)
            })
            .catch(err=>{
                dispatch(LOADING_HIDE)                
                dispatch(ERRORS_SHOW, err);
                reject(err)
            })
        })
    }
}

const mutations = {
    [PALINDROMO_FETCH]:(state,payload)=>{
        state.list = payload.palindromo || []            
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}