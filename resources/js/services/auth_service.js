import {http, httpFile} from './http_service';

export function login(user){
    return http().post('/api/auth/login',user)
    .then(response =>{
        if (response.status === 200) {
            localStorage.setItem("gooddeal-token", JSON.stringify(response.data))
        }
        return response.data;
    });
}

export function register(user){
    return http().post('/api/auth/register',user)
    .then(response =>{
        return response.data;
    });
}

export function logout(){
    return http().get('/api/auth/logout')
    .then(response =>{
        return response;
    });
}

export function getToken(){
    var user = localUserData();
    if (user !=null) {
        return user.Token.accessToken;
    }
    return null;
}

export function localUserData(){
    if (localStorage.getItem("gooddeal-token") !=null) {
        return JSON.parse(localStorage.getItem("gooddeal-token"));
    }
    return null;
}
