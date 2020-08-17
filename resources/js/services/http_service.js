import store from '../store';
import axios from "axios";
import * as auth from "./auth_service";

export function http(){
    return axios.create({
        baseUrl :store.state.apiUrl,
        headers:{
            Authorization : 'Bearer ' + auth.getToken()
        }
    });
}