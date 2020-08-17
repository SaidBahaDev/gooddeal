<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-1">
        <span class="pl-4 section">Annonces</span>
      </div>
      <div class="col-2 offset-9 text-right">
        <router-link to="/create-ad" exact>
          <span class="ajouter py-2 pr-4 pl-3">
            <i class="fas fa-plus"></i>Ajouter
          </span>
        </router-link>
      </div>
    </div>
    <div>
      <div class="row col-12 offset-1 data-header p-3 m-3">
        <div class="col-1 text-left text-capitalize">
          <span></span>
        </div>
        <div class="col-3 text-left text-capitalize">
          <span>Titre</span>
        </div>
        <div class="col-2 text-center text-capitalize">
          <span>Vendeur</span>
        </div>
        <div class="col-3 text-center text-capitalize">
          <span>categorie</span>
        </div>
        <div class="col-1 text-center text-capitalize">
          <span>Etat</span>
        </div>
        <div class="col-2 text-center text-capitalize">
          <span>Actions</span>
        </div>
      </div>
      <div v-for="ad in orderedAds" :key="ad.id" class="row col-12 offset-1 data-row px-3 py-3 m-3">
        <div class="col-1 text-left text-capitalize pl-0">
          <div class="thumbnail" :style="`background-image:url('${ad.image}')`">

          </div>
        </div>
        <div class="col-3 text-left text-capitalize my-auto">
          <span>{{ad.title}}</span>
        </div>
        <div class="col-2 text-center text-capitalize my-auto">
        <a
            v-b-modal.modal-Profile
            @click="modalProfile = ad.user.id"
            class="data-clickable"
          >{{ad.user.first_name}} {{ad.user.last_name}}</a>
                  </div>
        <div class="col-3 text-center text-capitalize my-auto">
          <span>{{ad.category.name}}</span>
        </div>
        <div class="col-1 text-center text-capitalize my-auto">
          <span v-b-tooltip.hover :title="[(ad.state == 1 ? 'Active' : ''), (ad.state == 0 ? 'Inactive' : ''), (ad.state == null ? 'En attente' : '')]">
            <i
              :class="[(ad.state == 1 ? 'activeState' : ''), (ad.state == 0 ? 'NotactiveState' : ''), (ad.state == null ? 'nullState' : '')]"
              class="fas fa-circle"
            ></i>
          </span>
        </div>
        <div class="col-2 text-center text-capitalize my-auto">
            <a v-b-modal.modal-viewAd @click="modalViewAd = ad.id" v-b-tooltip.hover title="Voir">
            
            <i class="far fa-eye actions"></i>
          </a>
          <a
            v-b-modal.modal-EditAd
            @click="modalEditAd = ad.id"
            exact
            v-b-tooltip.hover
            title="Modifier"
          >
            <i class="far fa-edit actions"></i>
          </a>
          <a
            v-if="user.user.role == 'admin' || user.user.role == 'super-admin'"
            @click="enableAd(ad.id)"
            exact  v-b-tooltip.hover title="Activer"
          >
            <i class="far fa-check-circle accept"></i>
          </a>
          <a
            v-if="user.user.role == 'admin' || user.user.role == 'super-admin'"
            @click="disableAd(ad.id)"
            exact v-b-tooltip.hover title="Désactiver"
          >
            <i class="fas fa-ban ban"></i>
          </a>
          <a v-if="user.user.role == 'seller'" @click="disableAd(ad.id)" exact v-b-tooltip.hover title="Supprimer">
            <i class="far fa-trash-alt ban"></i>
          </a>
        </div>
      </div>
      <div class="row">
        <b-modal id="modal-viewAd" size="xl" hide-footer>
          <Ad v-bind:adID="modalViewAd" />
        </b-modal>
      </div>
      <div class="row">
        <b-modal ref="modal-EditAd" id="modal-EditAd" size="xl" hide-footer>
          <EditAd v-bind:adID="modalEditAd" v-on:refrechads="getAllAds"/>
        </b-modal>
        </div>
        <div class="row">
          <b-modal ref="modal-profile" id="modal-Profile" size="xl" hide-footer>
            <Profile v-bind:userID="modalProfile" />
          </b-modal>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Ad from "./Ad";
import EditAd from "./EditAd";
import Profile from "../Users/Profile";
import { http } from "../../services/http_service";

export default {
  components: {
    Ad,
    EditAd,
    Profile 
  },
  data() {
    return {
      ads: [],
      errors: [],
      modalViewAd: "",
      modalEditAd: "",
      modalProfile: ""
    };
  },

  created() {
    this.getAllAds();
  },
  methods: {
    getAllAds() {
      if (
        this.$store.getters.localUserData.user.role == "admin" ||
        this.$store.getters.localUserData.user.role == "super-admin"
      ) {
        http()
          .get(`/api/AllAds/`)
          .then(response => {
            this.ads = response.data;
            return response;
          });
      }

      if (this.$store.getters.localUserData.user.role == "seller") {
        http()
          .get(`/api/myAds/${this.$store.getters.localUserData.user.id}`)
          .then(response => {
            this.ads = response.data;
            return response;
          });
      }
    },
    getAd(ad_id) {
      this.$router.push(`ad/${ad_id}`);
    },
    editAd(ad_id) {
      this.$router.push(`edit-ad/${ad_id}`);
    },

    // Disctiver ou suprimmer annonce (conditionner par le role d"utilisateur)
    disableAd(ad_id) {
      this.$fire({
        title: "Êtes-vous sûr?",
        text:
          this.$store.getters.localUserData.user.role == "seller"? "Vous ne pourrez pas revenir sur cela!": "",
        icon: "warning",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3580ff",
        cancelButtonColor: "#d33",
        confirmButtonText:
          this.$store.getters.localUserData.user.role == "seller"? "Oui, supprimez-le!": "Oui, désactiver-le!",
        cancelButtonText: "Annuler"
      }).then(result => {
        if (result.value) {
          http()
            .put(`/api/ads_disable/${ad_id}`)
            .then(response => {
              this.$fire({
                position: "bottom-end",
                showConfirmButton: false,
                text: "L'annonce a été activer avec succès",
                html:
                  this.$store.getters.localUserData.user.role == "seller"
                    ? '<span class="text-white"><i class="fas fa-check-circle"></i>L\'annonce a été supprimé avec succès</span>'
                    : '<span class="text-white"><i class="fas fa-check-circle"></i>L\'annonce a été désactiver avec succès</span>',
                timer: 2000,
                customClass: {
                  title: "text-white",
                  container: "alert-container-class",
                  popup: "alert-popup-class"
                }
              }).then(r => {
                console.log(r.value);
              });
              this.getAllAds();
              return response;
            });
        }
      });
    },

    // Activer l'annonce
    enableAd(ad_id) {
      http()
        .put(`/api/ads_enable/${ad_id}`)
        .then(response => {
          this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "L'annonce a été activer avec succès",
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>L\'annonce a été activer avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          }).then(r => {
            console.log(r.value);
          });
          this.getAllAds();
          return response;
        });
    }
  },
  computed: {
    user() {
      return this.$store.getters.localUserData;
    },
    orderedAds: function() {
      return _.orderBy(this.ads, "state", "desc");
    }

    // filteredAds: function() {
    //     	var self = this;
    //     	return this.ads.filter(function (ad) {
    //         	return ad.state == 0;
    //         });
    //     }
  }
};
</script>