import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: '',
        userInfo: null,
        isUserLogin: false
    },
    mutations: {
        setToken(state,token) {
            state.token = token;
            if(token) {
                state.isUserLogin = true;
            }else{
                state.isUserLogin = false;
            }
        },
        setUserInfo(state,user){
            state.userInfo = user;
        }
    },
    actions: {
        setToken({commit},token){
            commit('setToken',token);
        },
        setUserInfo({commit},user){
            commit('setUserInfo',user);
        }
    }
});

export default store;