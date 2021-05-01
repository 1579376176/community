import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        loginUser: ""
    },
    //同步
    mutations: {
        storeLoginUser(state, user) {
            state.loginUser = user
        }
    },
    //异步
    actions: {
        setToken: (state, token) => {
            state.token = token;
            console.log(state.token);
            localStorage.setItem('mytoken', token)

        },
        logout: state => {
            state.token = null;
            localStorage.removeItem('mytoken');
        }
    },
    modules: {}
})