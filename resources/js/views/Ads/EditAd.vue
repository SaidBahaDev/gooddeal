<template>
  <div class="container ad createAd px-5 py-5">
    <h1 class=" m-5">Modifier une annonce</h1>
    <!-- <div class="row col-8 d-flex justify-content-around mb-5">
      <div @click="setType('product')" :class="{ adTypeActive: product}" class="adType"><i class="fas fa-archive"></i>Produit</div>
      <div @click="setType('service')" :class="{ adTypeActive: service}" class="adType"><i class="fas fa-tools"></i>Service</div>
    </div>-->

    <form v-on:submit.prevent="updateAd" class="pt-3 px-5 mx-3">
      <div class="row">
        <div class="form-label-group col-12 mb-3">
          <input
            type="text"
            v-model="ad.title"
            id="title"
            class="form-control"
            placeholder="Titre"
            autofocus
          />
          <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
        </div>

        <div class="form-label-group col-12 mb-3">
          <textarea
            rows="7"
            cols="50"
            v-model="ad.description"
            id="description"
            class="form-control"
            placeholder="Description"
          />
          <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
        </div>
      </div>

      <!-- ONLY SERVICE  -->

      <div class="row">
        <div v-if="service" class="form-label-group col-4 mb-3">
          <input
            type="text"
            v-model="ad.location"
            id="location"
            class="form-control"
            placeholder="Lieu de réalisation"
            value
          />
          <div class="invalid-feedback" v-if="errors.location">{{errors.location[0]}}</div>
        </div>

        <div v-if="service" class="form-label-group col-4 mb-3">
          <input
            type="text"
            v-model="ad.estimated_time"
            id="estimated_time"
            class="form-control"
            placeholder="Délai de réalisation"
            value
          />
          <div class="invalid-feedback" v-if="errors.estimated_time">{{errors.estimated_time[0]}}</div>
        </div>

        <div v-if="service" class="form-label-group col-md-4 mb-3">
          <input
            type="text"
            v-model="ad.budget"
            id="budget"
            class="form-control"
            placeholder="Budget"
            value
          />
          <div class="invalid-feedback" v-if="errors.budget">{{errors.budget[0]}}</div>
        </div>
      </div>
      <!-- PRODUCT -->
      <div class="row justify-content-end">
        <div class="form-label-group col-4 mb-3">
          <input
            type="text"
            v-model="ad.price"
            id="price"
            class="form-control"
            placeholder="Prix"
            value
          />
          <div class="invalid-feedback" v-if="errors.price">{{errors.price[0]}}</div>
        </div>

        <div class="form-label-group col-4 mb-3">
          <select name="category" v-model="ad.category_id" id="category" class="form-control">
            <option value default>Categorie</option>
            <option
              v-for="category in categories"
              :value="category.id"
              :key="category.id"
            >{{category.name}}</option>
          </select>
          <div class="invalid-feedback" v-if="errors.category_id">{{errors.category_id[0]}}</div>
        </div>

        <div
          v-if="loggeduser.user.role == 'admin' || loggeduser.user.role == 'super-admin'"
          class="form-label-group col-4 mb-3"
        >
          <select name="user" v-model="ad.user_id" id="user" class="form-control">
            <option value default>Vendeur</option>
            <option
              v-for="seller in sellers"
              :value="seller.id"
              :key="seller.id"
            >{{seller.id}} {{seller.first_name}} {{seller.last_name}}</option>
          </select>
          <div class="invalid-feedback" v-if="errors.user_id">{{errors.user_id[0]}}</div>
        </div>

        <div class="col-4">
          <button class="btn btn-primary btn-block text-uppercase" type="submit">Modifier l'annonce</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { http } from "../../services/http_service";
import axios from "axios";
export default {
  name: "editAd",
  props: ['adID'],
  data() {
    return {
      ad_id: this.$route.params.id || this.adID,
      ad: {
        // title: "",
        // description: "",
        // location: "",
        // budget: "",
        // estimated_time: "",
        // image: "",
        // price: "",
        // type: this.service ? 'service' : 'produit',
        // state: "",
        // category_id: "",
        // user_id:this.$store.getters.localUserData.user.id
      },
      errors: {},
      categories: {},
      sellers: {},
      product: null,
      service: null,
      loggeduser: this.$store.getters.localUserData
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/ads/${this.ad_id}`)
      .then(response => {
        this.ad = response.data;
        if (this.ad.type == "produit") {
          this.product = true;
          this.service = false;
        }
        if (this.ad.type == "service") {
          this.product = false;
          this.service = true;
        }
      })
      .catch(e => {
        this.errors.push(e);
      });

    axios
      .get(`http://127.0.0.1:8000/api/categories`)
      .then(response => {
        this.categories = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });

    if (
      this.$store.getters.localUserData.user.role == "admin" ||
      this.$store.getters.localUserData.user.role == "super-admin"
    ) {
      this.ad.user_id = "";
      http()
        .get("/api/sellers")
        .then(response => {
          this.sellers = response.data;
          return response;
        });
    }
  },
  methods: {
    updateAd() {
      http()
        .put(`/api/ads/${this.ad_id}`, this.ad)
        .then(response => {
          this.errors = {};
          this.messages = response.data;

          this.$fire({
            title: "Succès",
            text: "L'annonce a été modifié avec succès",
            type: "success",
            timer: 1000,
            customClass: {
              title: "alertSuccesTitle",
              confirmButton: "alertSuccesBtn"
            }
          }).then(r => {
            console.log(r.value);
          });
          this.$root.$emit('bv::hide::modal', 'modal-EditAd');
          this.$emit('refrechads');
          this.$router.push("/annonces");
        })
        .catch(error => {
          this.errors = error.response.data.error;
        });
    }
  }
};
</script>