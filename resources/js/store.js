import Vue from "vue";
import Vuex from "vuex";
import * as auth from "./services/auth_service";


Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        localUserData: auth.localUserData(),
        isloggedin: localStorage.getItem("gooddeal-token") !=null,
        apiUrl: 'http://localhost:8000/api',
        serverPath :'http://localhost:8000'
    },
    mutations: {
        login(state){
            state.isloggedin = true;
            state.localUserData =  auth.localUserData();
        },
        logout(state){
            state.isloggedin = false;
            state.localUserData =  null;
        }
    },
    actions: {
   },
    getters: {
        loginState(state){
            return state.isloggedin;
        },
        localUserData(state){
            return state.localUserData;
        }
    }
})