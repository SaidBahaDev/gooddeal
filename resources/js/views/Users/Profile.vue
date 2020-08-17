<template>
  <Main>
    <div class="container py-5 mb-3 ad profile">
       <div class="mb-5 vertical-align">
      <img class="profile-avatar" :src="'../storage/img/avatar.svg'" />
      <span class="role">{{roleTranslate}}</span>
      <span class="align-self-end ml-auto" v-if = "role =='super-admin' || role === 'admin' || profile_id === userId ">
            <button type="button align-self-end ml-auto" class="btn btn-primary">
                <a @click="editUser(profile)" exact>Modifier
                    <i class="far fa-edit actions btn-primary"></i>
                </a>
            </button>
        </span>
      <h1
        class="text-center text-capitalize"
      >{{profile.first_name}} {{profile.last_name}}</h1>
    </div>
      <div class="row" v-if="profile.address">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="far fa-envelope"></i>Adresse :</div>
        <div class="col-6">{{profile.address}}</div>
      </div>
      <div class="row" v-if="profile.email">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fas fa-at"></i>E-mail :</div>
        <div class="col-6">{{profile.email}}</div>
      </div>
      <div class="row" v-if="profile.company_name">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fas fa-briefcase"></i>Nom d'entreprise :</div>
        <div class="col-6">{{profile.company_name}}</div>
      </div>
      <div class="row" v-if="profile.company_number">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fas fa-briefcase"></i>Numero d'entreprise :</div>
        <div class="col-6">{{profile.company_number}}</div>
      </div>
      <div class="row" v-if="profile.phone">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fas fa-phone-square"></i>Numero de Mobile :</div>
        <div class="col-6">{{profile.phone}}</div>
      </div>
      <div class="row" v-if="profile.website">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fas fa-globe"></i>Site web :</div>
        <div class="col-6">{{profile.website}}</div>
      </div>
      <div class="row" v-if="profile.linkedin_link">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fab fa-linkedin"></i>LinkedIn:</div>
        <div class="col-6">{{profile.linkedin_link}}</div>
      </div>
      <div class="row" v-if="profile.facebook_link">
        <div class="col-3 offset-2 font-weight-bold mb-3"><i class="fab fa-facebook-square"></i>Facebook :</div>
        <div class="col-6">{{profile.facebook_link}}</div>
      </div>
    </div>
  </Main>
</template>
<script>
import axios from "axios";

export default {
  name:"Profile",
  props: ['userID'],
  data() {
    return {
      role:"",
      userId:'',
      profile_id: this.$route.params.id || this.userID,
      profile: {},
      errors: []
    };
  },
  methods:{
      editUser(user){
      this.$router.push({ name: 'edit', params: { userId: user.id } })
    },
  },
  created() {
    const gd = JSON.parse(localStorage.getItem('gooddeal-token'));
    if (gd) {
        this.role = gd.user.role;
        this.userId = gd.user.id;
    }
    axios
      .get(`http://127.0.0.1:8000/api/users/${this.profile_id}`)
      .then(response => {
        this.profile = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  computed: {
    roleTranslate: function () {
      if (this.profile.role == "buyer") {
          return "Acheteur";
      }
       if (this.profile.role == "seller") {
          return "Fournisseur";
      }
      return  this.profile.role;
    }
  }
};
</script>
