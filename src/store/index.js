import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        authorized: false,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            state.authorized = true;
            localStorage.token = token
        },
        delToken(state) {
            state.token = ''
            state.authorized = false;
            localStorage.removeItem('token')
        }
    }
})