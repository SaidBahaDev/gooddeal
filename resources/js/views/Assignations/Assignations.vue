<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-1">
        <span class="pl-4 section">Commandes</span>
      </div>
    </div>
    <div>
      <div class="row col-12 offset-1 data-header p-3 m-3">
        <div class="col-4 text-left text-capitalize">
          <span>Produit/Service</span>
        </div>
        <div class="col-2 text-left text-capitalize">
          <span>Vendeur</span>
        </div>
        <div class="col-3 text-center text-capitalize">
          <span>Acheteur</span>
        </div>

        <div
          v-if="$store.getters.localUserData.user.role == 'buyer'"
          class="col-2 text-center text-capitalize"
        >
          <span>Evaluer</span>
        </div>
        <div class="col-1 text-center text-capitalize">
          <span>Etat</span>
        </div>

        <div
          v-if="this.$store.getters.localUserData.user.role != 'buyer'"
          class="col-2 text-center text-capitalize"
        >
          <span>Actions</span>
        </div>
      </div>
      <div
        v-for="assignation in assignations"
        :key="assignation.id"
        class="row col-12 offset-1 data-row px-3 py-4 m-3"
      >
        <div class="col-4 text-left text-capitalize">
          <span>
            <a 
            v-b-modal.modal-viewAd
              class="data-clickable"
              @click="modalViewAd = assignation.ad_id"
              href="#"
            >{{assignation.ad.title}}</a>
          </span>
        </div>

        <div class="col-2 text-left text-capitalize">
          <span class="test">
            <a
              class="data-clickable"
              v-b-modal.modal-Profile
              @click="modalProfile = assignation.seller_id"
              href="#"
            >{{assignation.seller.first_name}} {{assignation.seller.last_name}}</a>
          </span>
        </div>
        <div class="col-3 text-center text-capitalize">
          <span>
            <a
              class="data-clickable"
              v-b-modal.modal-Profile
              @click="modalProfile = assignation.buyer_id"
              href="#"
            >{{assignation.buyer.first_name}} {{assignation.buyer.last_name}}</a>
          </span>
        </div>

        <div
          v-if="$store.getters.localUserData.user.role == 'buyer'"
          class="col-2 text-center text-capitalize"
        >
          <span v-if="assignation.state == 1 && assignation.reviewed == !1">
            <a
              v-b-modal.modal-Review
              @click="ad_id = assignation.ad_id"
              class="btn btn-primary text-light"
            >Noter</a>

            <!-- <div id="myModal" class="modal fade" tabindex="-1">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form v-on:submit.prevent="addreview">
                    <div class="modal-header">
                      <h5 class="modal-title">Évaluer ce vendeur {{assignation.ad_id}}</h5>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                        <div class="form-label-group mb-3">
                          <select name="score" v-model="score" id="score" class="form-control">
                            <option value default>Selectionner un score</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>-->
          </span>
          <span v-else>
            <button type="button" class="disactiver">Noter</button>
          </span>
        </div>
        <div class="col-1 text-center text-capitalize">
          <span v-b-tooltip.hover :title="[(assignation.state == 1 ? 'Active' : ''), (assignation.state == 0 ? 'Inactive' : ''), (assignation.state == null ? 'En attente' : '')]">
            <i
              :class="[(assignation.state == 1 ? 'activeState' : ''), (assignation.state == 0 ? 'NotactiveState' : ''), (assignation.state == null ? 'nullState' : '')]"
              class="fas fa-circle"
            ></i>
          </span>
        </div>

        <div
          v-if="$store.getters.localUserData.user.role != 'buyer'"
          class="col-2 text-center text-capitalize"
        >
          <a @click="stateAccept(assignation.id)" exact v-b-tooltip.hover title="Accepter">
            <i class="far fa-check-circle accept"></i>
          </a>
          <a @click="stateRefuse(assignation.id)" exact v-b-tooltip.hover title="Refuser">
            <i class="fas fa-ban ban"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="row">
      <b-modal ref="my-modal" id="modal-Review"  hide-footer>
        <div class="ad p-5 review">
        <form v-on:submit.prevent="addreview">
          <h5 class="pb-3">Évaluer ce vendeur</h5>
          <select name="score" v-model="score" id="score" class="form-control">
            <option value default>Selectionner un score</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </div>
        </form>
        </div>
      </b-modal>
    </div>

    <div class="row">
          <b-modal ref="modal-profile" id="modal-Profile" size="xl" hide-footer>
            <Profile v-bind:userID="modalProfile" />
          </b-modal>
    </div>

    <div class="row">
        <b-modal id="modal-viewAd" size="xl" hide-footer>
          <Ad v-bind:adID="modalViewAd" />
        </b-modal>
      </div>
  </div>
</template>
<script>
import axios from "axios";
import Ad from "../Ads/Ad";
import Profile from "../Users/Profile";
import { http } from "../../services/http_service";

export default {
    components: {
    Ad,
    Profile 
  },
  data() {
    return {
      assignations: [],
      errors: [],
      ad_id: "",
      score: "",
      modalViewAd: "",
      modalProfile: ""
    };
  },

  created() {
   this.getAssignations();
  },
  methods: {
    getAssignations(){
       if (
      this.$store.getters.localUserData.user.role == "admin" ||
      this.$store.getters.localUserData.user.role == "super-admin"
    ) {
      http()
        .get("/api/assignations")
        .then(response => {
          this.assignations = response.data;
          return response;
        });
    }
    if (
      this.$store.getters.localUserData.user.role == "buyer" ||
      this.$store.getters.localUserData.user.role == "seller"
    ) {
      http()
        .get("/api/myassignations")
        .then(response => {
          this.assignations = response.data;
          return response;
        });
    }
    },
    stateAccept($id) {
      http()
        .put(`/api/acceptassignation/${$id}`, this.assignation)
        .then(response => {
          if (
            this.$store.getters.localUserData.user.role == "admin" ||
            this.$store.getters.localUserData.user.role == "super-admin"
          ) {
            http()
              .get("/api/assignations")
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
                });
                this.assignations = response.data;
                return response;
              });
          }
          if (
            this.$store.getters.localUserData.user.role == "buyer" ||
            this.$store.getters.localUserData.user.role == "seller"
          ) {
            http()
              .get("/api/myassignations")
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
                });
                this.assignations = response.data;
                return response;
              });
          }
          this.errors = {};
          this.messages = response.data;
        })
        .catch(error => {
          this.errors = error.response.data.error;
        });
    },
    stateRefuse($id) {
      this.$fire({
        title: "Êtes-vous sûr?",
        text:
          this.$store.getters.localUserData.user.role == "seller"
            ? "Vous pourrez le modifier plus tard"
            : "",
        icon: "warning",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3580ff",
        cancelButtonColor: "#d33",
        confirmButtonText:
          this.$store.getters.localUserData.user.role == "seller"
            ? "Oui, refuser la demande!"
            : "Oui, désactiver la demande!",
        cancelButtonText: "Annuler"
      }).then(result => {
        if (result.value) {
          http()
            .put(`/api/denieassignation/${$id}`, this.assignation)
            .then(response => {
              if (
                this.$store.getters.localUserData.user.role == "admin" ||
                this.$store.getters.localUserData.user.role == "super-admin"
              ) {
                http()
                  .get("/api/assignations")
                  .then(response => {
                    this.$fire({
                      position: "bottom-end",
                      showConfirmButton: false,
                      text: "La demande d'achat a été désactiver avec succès",
                      html:
                        '<span class="text-white"><i class="fas fa-check-circle"></i>La demande d\'achat a été désactivée avec succès</span>',
                      timer: 2000,
                      customClass: {
                        title: "text-white",
                        container: "alert-container-class",
                        popup: "alert-popup-class"
                      }
                    });
                    this.assignations = response.data;
                    return response;
                  });
              }
              if (this.$store.getters.localUserData.user.role == "seller") {
                http()
                  .get("/api/myassignations")
                  .then(response => {
                    this.$fire({
                      position: "bottom-end",
                      showConfirmButton: false,
                      text: "L'annonce a été activer avec succès",
                      html:
                        '<span class="text-white"><i class="fas fa-check-circle"></i>La demande d\'achat a été refusée avec succès</span>',
                      timer: 2000,
                      customClass: {
                        title: "text-white",
                        container: "alert-container-class",
                        popup: "alert-popup-class"
                      }
                    });

                    this.assignations = response.data;
                    return response;
                  });
              }
              this.errors = {};
            })
            .catch(error => {
              this.errors = error.response.data.error;
            });
        }
      });
    },
    getProfile(buyer_id) {
      this.$router.push({ name: "profile", params: { id: buyer_id } });
      //this.$router.push(`profile/${id}`)
    },
    getAd(ad_id) {
      this.$router.push({ name: "assignations", params: { ad_id: ad_id } });
    },
    setAdId(id) {
      this.ad_id = 5;
    },
    addreview() {
      http()
        .post("/api/reviews/", {
          score: this.score,
          ad_id: this.ad_id
        })
        .then(response => {
           this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>La note a été envoyé avec succès, Merci</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          }).then(r => {
            console.log(r.value);
          });
          this.$refs['my-modal'].hide();
          this.getAssignations();
        });
    }
  }
};
</script>