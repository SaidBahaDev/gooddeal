<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row pr-4">
            <div class="col ad p-4">
              <div class="row">
                <div class="col-4 img_ad">
                  <img :src="ad.image" alt="">
                </div>
                <div class="col-8">
                  <!-- <h3>AD PAGE {{ $route.params.id }}</h3>-->
                  <div class="row">
                    <div class="col-12">
                      <div class="row justify-content-end">
                        <div class="col-10 mb-4">
                          <div class="text-capitalize title title_ad">{{ad.title}}</div>
                        </div>
                        <div class="col-2 text-right">
                          <div class="price">{{ad.price}}$</div>
                        </div>
                        <div class="col-1 text-right">
                          <button
                            v-if="buyerCondition()"
                            @click="createAssignation()"
                            class="commander" v-b-tooltip.hover title="Commander"
                          ><i class="fas fa-cart-arrow-down"></i></button>
                        </div>
                        <div class="col-1 text-right mr-3">
                            <router-link :to="{ name: 'conversation', params: { adId: ad_id, buyerId: $store.getters.localUserData.user.id } }">
                                <button
                                    @click="chat()"
                                    class="commander" v-b-tooltip.hover title="Envoyer un message">
                                    <i class="fas fa-comments"></i>
                                </button>
                            </router-link >
                        </div>
                      </div>
                      <div class="my-1">
                        <div class="row">
                          <div class="col-6">
                            <p><b>Ville : </b>{{ad.location}}</p>
                            <p><b>Fournisseur : </b>{{ad.user.first_name}} {{ad.user.last_name}}</p>
                            <p v-if="ad.budget"><b>Budget : </b>{{ad.budget}}</p>
                          </div>
                          <div class="col-6">
                            <p><b>Type : </b>{{ad.type}}</p>
                            <p><b>Categorie : </b>{{ad.category.name}}</p>
                            <p v-if="review"><b><i class="fas fa-star map"></i> </b>{{review}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    Description :
                    <br />
                    {{ad.description}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";
import { http } from "../../services/http_service";

export default {
    name: 'Ad',
    props: ['adID'],
  data() {
    return {
      ad: {},
      review: {},
      ad_id: this.$route.params.id || this.adID,
      errors: [],
      assigned: null
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/ads/${this.ad_id}`)
      .then(response => {
        this.ad = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });

    axios
      .get(`http://127.0.0.1:8000/api/ad_reviews/${this.ad_id}`)
      .then(response => {
        this.review = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    chat(){

    },
    createAssignation() {
      http()
        .post("/api/assignations/", {
          ad_id: this.ad_id,
          buyer_id: this.$store.getters.localUserData.user.id
        })
        .then(response => {
          console.log(response);
          this.assigned = true;
          this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "Votre demande a été envoyée avec succès",
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>Votre demande a été envoyée avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          });
          //this.messages = response.data;
          return response;
        });
    },

    buyerCondition(){
      if (!this.assigned && this.$store.getters.loginState && this.$store.getters.localUserData.user.role == 'buyer') {
        return true
      }
      return false;
    }
  }
};
</script>
