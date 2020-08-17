<template>
  <div class="header-container mb-4">
    <div class="container">
      <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
         <router-link to="/" exact><img class="logo" :src="'../storage/img/logo.png'" /></router-link>
        <a href="/" class="navbar-brand d-flex w-50 mr-auto"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar3"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul class="navbar-nav w-100 justify-content-center">
            <!-- <li class="nav-item active">
              <router-link to="/" class="nav-link" exact>Annonces</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/" class="nav-link" exact>Services</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/" class="nav-link" exact>Autos</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/" class="nav-link" exact>Immobilier</router-link>
            </li> -->
          </ul>

          <ul v-if="isloggedin" class="nav navbar-nav ml-auto w-100 justify-content-end pointer">
             <div
            v-if="isloggedin"
            class="dropdown show nav navbar-nav ml-auto w-100 justify-content-end">
            <div
              class="dropdown"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>
                <b class="text-capitalize">{{user.user.first_name}} {{user.user.last_name}}</b>
              </span>
              <img class="logo" :src="'../storage/img/avatar.svg'" />
            </div>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a @click="getProfile(user.user.id)" class="dropdown-item" href="#">Profile</a>
              <router-link v-if="user.user.role =='seller'" to="/annonces" class="dropdown-item" exact>Annonces</router-link>
              <router-link v-if="user.user.role =='seller' | user.user.role =='buyer'" to="/messages/" class="dropdown-item" exact>Messages</router-link>
              <router-link v-if="user.user.role =='admin'| user.user.role =='super-admin'" to="/annonces" class="dropdown-item" exact>Annonces</router-link>
              <router-link v-if="user.user.role =='super-admin'" to="/categories" class="dropdown-item" exact>Catégories</router-link>
              <router-link v-if="user.user.role =='admin'| user.user.role =='super-admin'" to="/utilisateurs" class="dropdown-item" exact>Utilisateurs</router-link>                        
              <router-link v-if="user.user.role =='admin'| user.user.role =='super-admin'" to="/assignations" class="dropdown-item" exact>Commandes</router-link>
              <router-link v-if="user.user.role =='seller'" to="/assignations" class="dropdown-item" exact>Commandes</router-link>
              <router-link v-if="user.user.role =='buyer'" to="/assignations" class="dropdown-item" exact>Commandes</router-link>

              <!-- <router-link v-if="user.user.role =='admin'| user.user.role =='super-admin'" to="/" class="dropdown-item" exact>Notations</router-link> -->
              <a @click="logout" class="dropdown-item" href="#">Se déconnecter</a>
            </div>
          </div>
          </ul>
          <ul  v-else class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item active">
              <router-link to="/login" class="nav-link font-weight-bold" exact>Se connecter</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/register" class="nav-link font-weight-bold" exact>S'inscrire</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import * as auth from "../services/auth_service";
import { http } from "../services/http_service";

export default {
  name: "Header",
  data(){
    return{
      userData : JSON.parse(localStorage.getItem("gooddeal-token")),
      erros:{},
    }
  },
  computed: {
    isloggedin() {
      return this.$store.getters.loginState;
    },
    user(){
      return  this.$store.getters.localUserData;
    }
  },
   methods : {
    logout: async function () {
      try{
        await auth.logout();
        this.errors = {};
        localStorage.removeItem("gooddeal-token");
        this.$store.commit("logout");
        this.$router.push('/');
      }catch(error){
        this.errors = error.response.data.error;
      }
    },
    getProfile(userid){
      this.$router.push({ name: 'profile', params: { id: userid } })
      // this.$router.push(`profile/${id}`)
    }
  },
    created(){
    http()
          .get(`/api/auth/testLogin`)
          .then(response => {
          }).catch(e => {
        if (e.response.status == 401) {
             localStorage.removeItem("gooddeal-token");
            this.$store.commit("logout");
            }
      });
  }
};
</script>

