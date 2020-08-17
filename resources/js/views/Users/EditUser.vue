<template>
<main>

  <div class="container col-7 mx-auto ad signup p-5">
       <div class="">
          <div class="card-body">
            <h5 class="card-title section text-uppercase" v-if = "role === 'super-admin' || role==='admin'">Modifier l'utilisateur</h5>
            <h5 class="card-title section text-uppercase" v-else >Modifier mon Profile</h5>
            <form v-on:submit.prevent="edit"  >

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

              <div class="form-label-group mb-3">
                    <select name="role"  v-model="user.role" id="role" class="form-control">
                        <option value="" default>Acheteur ou vendeur ?</option>
                        <option value="seller">Acheteur</option>
                        <option value="buyer">Vendeur</option>
                        <option value="admin">Admin</option>
                        <option value="super-admin">Super Admin</option>
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
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Modifier </button>
            </form>
          </div>
        </div>
  </div>
</main>
</template>

<script>
//import * as auth from '../../services/auth_service'
import {http} from '../../services/http_service'
export default {
  name:"edit",
  props : ['userId'],
  data(){
    return {
       errors:{},
       user:{},
       role:"",
    }
  },
  methods : {
    edit() {
      http()
        .put('/api/users/' + this.user.id, this.user)
        .then(response =>{
          this.errors = {};
          let userMessage = "Votre profil a été mis à jour avec succès";
            if(this.role == 'super-admin' || this.role === 'admin')
                userMessage= "Utilisateur modifié avec succès";
          this.messages = response.data;
          this.$fire({
            title: "Succès",
            text: userMessage,
            type: "success",
            timer: 10000,
            customClass: {
              title: "alertSuccesTitle",
              confirmButton: "alertSuccesBtn"
            }
          }).then(r => {
            console.log(r.value);
          });
           this.$root.$emit('bv::hide::modal', 'modal-Edit');
          this.$emit('refrechUsers');
        })
        .catch(error => {
            this.errors = error.response.data.error;
        });
    }
  },
  created(){
    const gd = JSON.parse(localStorage.getItem('gooddeal-token'));
    this. role = gd.user.role;
    http()
        .get(`/api/users/`+ this.userId)
        .then(response => {
            this.user = response.data;
        })
        .catch(e => {
            this.errors.push(e);
        });
  }
}
</script>
