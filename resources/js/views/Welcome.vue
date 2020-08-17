<template>
  <Main>
    <!-- <div class="banner mb-4"></div> -->
    <div class="container">
      <div class="row mt-4">
        <div class="col-3">
          <div class="row pr-4">
            <div class="col ad p-4">
              <ul  class="pl-3" v-for="category in categories" :key="category.id">
                <li><a class="data-clickable" @click="filterByCategory(category.id)">{{category.name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div v-for="ad in filtredAds" :key="ad.id" class="row ad mb-4 p-3">
            <div class="col-3 img" @click="getAd(ad.id)" :style="`background-image:url('${ad.image}')`">
              
                  <!-- <img :src="ad.image" alt=""> -->
                  <!-- <img :src="`../static/${value}.png`"></img> -->
              
            </div>
            <div class="col-9">
              <div>
                <div class="row">
                  <div class="col-10">
                    <div @click="getAd(ad.id)" class="text-capitalize title">{{ad.title}}</div>
                    <div class="my-1">
                      <i class="fas fa-map-marker-alt mr-1 map"></i>
                      {{ad.location}}
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="price text-right">{{ad.price}}$</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col my-1">
                    <span class="cat px-3 rounded">{{ad.category.name}}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="description">{{ad.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      ads: [],
      filtredAds :[],
      categories: [],
      errors: []
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/ads`)
      .then(response => {
        this.ads = response.data;
        this.filtredAds = response.data;
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

  },

  methods : {
    getAd(ad_id){
      this.$router.push(`ad/${ad_id}`)
    },

    filterByCategory(cat_id){
      console.log("test");
      	var test = this.ads.filter(function (ad) {
            	return ad.category_id == cat_id;
            });
        this.filtredAds = test;
    },

  },

  computed: {
    filtreme() {
      return this.ads;
    },
  }
};
</script>
