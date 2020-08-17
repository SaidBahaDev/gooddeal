<template>
<body>
  <div class="container">
    <div class="row">
        <div class="col-6 mx-auto ad login p-5">
          <div class="">
            <h5 class="
            card-title pb-2 section">Se connecter</h5>
            <form v-on:submit.prevent="login" class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Adresse e-mail : </label>
                <input
                  type="email"
                  v-model="user.email"
                  id="inputEmail"
                  class="form-control"
                  autofocus
                />
                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
              </div>
              <br />
              <div class="form-label-group">
                <label for="inputPassword">Mot de passe : </label>
                <input
                  type="password"
                  v-model="user.password"
                  id="inputPassword"
                  class="form-control"
                />

                <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
              </div>
              <div class="mt-2">
                <span>Vous n'avez pas encore de compte? </span><router-link to="/register" class="data-clickable">S'inscrire</router-link>
              </div>
              <button
                class="btn btn-lg btn-primary btn-block text-uppercase mt-3"
                type="submit"
              >Se connecter</button>
            </form>
          </div>
        </div>
    </div>
  </div>
</body>
</template>

<script>
import * as auth from "../../services/auth_service";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {},
      otherErrors:""
    };
  },
  methods: {
    login: async function() {
      try {
        await auth.login(this.user);
        this.errors = {};
        this.$router.push("/");
        this.$store.commit("login");
      } catch (error) {
        switch(error.response.status){
          case 401:
         this.errors = error.response.data.error;
          break;
          case 403:
            this.errors = {};
         this.otherErrors = error.response.data.error;
         this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            html:
              `<span class="text-white"><i class="fas fa-times-circle"></i>${this.otherErrors.message}</span>`,
            timer: 4000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class-error"
            }
          }).then(r => {
            console.log(r.value);
          });
          break;
        }
        
      }
    }
  }
};
</script>