<template>
<body>

  <div class="container">
     <div class="row centered-form">
        <div class="col-9 mx-auto ad signup p-5">
          <div class="card-body">
            <h5 class="card-title text-center text-uppercase">S'enregistrer</h5>
            <form v-on:submit.prevent="register"  >
                <div class="row">
                    <div class="form-label-group col-md-6 mb-3">
                        <input
                            type="text"
                            v-model="user.first_name"
                            id="first_name"
                            class="form-control"
                            placeholder="Prénom"
                            autofocus
                        />
                        <div class="invalid-feedback" v-if="errors.first_name">{{errors.first_name[0]}}</div>
                    </div>

                    <div class="form-label-group   col-md-6">
                        <input
                            type="text"
                            v-model="user.last_name"
                            id="last_name"
                            class="form-control"
                            placeholder="Nom"
                        />
                        <div class="invalid-feedback" v-if="errors.last_name">{{errors.last_name[0]}}</div>
                    </div>

                </div>

                <div class="form-label-group mb-3">
                    <input
                        type="email"
                        v-model="user.email"
                        id="inputEmail"
                        class="form-control"
                        placeholder="Courriel"
                        value=""
                    />
                    <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
              </div>

                <div class="row">
                    <div class="form-label-group col-md-6 mb-3">
                         <input
                            type="password"
                            v-model="user.password"
                            id="password"
                            class="form-control"
                            placeholder="Mot de passe"
                            value=""
                        />
                        <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                    </div>

                    <div class="form-label-group col-md-6 mb-3">
                         <input
                            type="password"
                            v-model="user.password_confirmation"
                            id="password_confirmation"
                            class="form-control"
                            placeholder="Confirmation mot de passe"
                            value=""
                        />
                        <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                    </div>
              </div>

              <div class="form-label-group mb-3">
                    <select name="role"  v-model="user.role" id="role" class="form-control">
                        <option value="" default>Acheteur ou vendeur ?</option>
                        <option value="seller">Acheteur</option>
                        <option value="buyer">Vendeur</option>
                    </select>
                    <div class="invalid-feedback" v-if="errors.role">{{errors.role[0]}}</div>
                </div>

            <div class="row">
                <div class="form-label-group col-md-6 mb-3">
                     <input
                        type="text"
                        v-model="user.company_name"
                        id="company_name"
                        class="form-control"
                        placeholder="Nom de l'entreprise"
                    />
                    <div class="invalid-feedback" v-if="errors.company_name">{{errors.company_name[0]}}</div>
                </div>

                <div class="form-label-group col-md-6 mb-3">
                     <input
                        type="text"
                        v-model="user.company_number"
                        id="company_number"
                        class="form-control"
                        placeholder="Numero de l'entreprise"
                    />
                    <div class="invalid-feedback" v-if="errors.company_number">{{errors.company_number[0]}}</div>
                </div>
            </div>

              <div class="form-label-group mb-3">
                     <input
                        type="text"
                        v-model="user.website"
                        id="website"
                        class="form-control"
                        placeholder="Site web de l'entreprise"
                    />
                    <div class="invalid-feedback" v-if="errors.website">{{errors.website[0]}}</div>
                </div>

                <div class="form-label-group mb-3">
                    <input
                        type="text"
                        v-model="user.address"
                        id="address"
                        class="form-control"
                        placeholder="Addresse de l'entreprise"
                    />
                    <div class="invalid-feedback" v-if="errors.address">{{errors.address[0]}}</div>
                </div>

                <div class="form-label-group mb-3">
                     <input
                        type="text"
                        v-model="user.phone"
                        id="phone"
                        class="form-control"
                        placeholder="Téléphone de l'entreprise"
                    />
                    <div class="invalid-feedback" v-if="errors.phone">{{errors.phone[0]}}</div>
                </div>

            <div class="row">
                <div class="form-label-group col-md-6 mb-3">
                     <input
                        type="text"
                        v-model="user.linkedin_link"
                        id="linkedin_link"
                        class="form-control"
                        placeholder="Linkedin"
                    />
                    <div class="invalid-feedback" v-if="errors.linkedin_link">{{errors.linkedin_link[0]}}</div>
                </div>


                <div class="form-label-group col-md-6 mb-3">
                     <input
                        type="text"
                        v-model="user.facebook_link"
                        id="facebook_link"
                        class="form-control"
                        placeholder="Facebook"
                    />
                    <div class="invalid-feedback" v-if="errors.facebook_link">{{errors.facebook_link[0]}}</div>
                </div>
            </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Je m'enregistre </button>
            </form>
          </div>
        </div>
    </div>
  </div>
</body>
</template>

<script>
import * as auth from '../../services/auth_service'
export default {
  name:"register",
  data(){
    return {
        test : auth.getToken(),
      user:{
         first_name: '',
        last_name: '',
        email: '',
        password: '',
         password_confirmation: '',
        company_name:'',
        company_number:'',
        website:'',
        address:'',
        phone:'',
        linkedin_link:'',
        facebook_link:'',
        state:'',
        role:'',
      },
      errors:{}
    }
  },
  methods : {
    register: async function () {
      try{
        await auth.register(this.user);
        this.errors = {};
        this.$router.push('/confirmation')
      }catch(error){
        this.errors = error.response.data.error;
      }
    }
  }
}
</script>
