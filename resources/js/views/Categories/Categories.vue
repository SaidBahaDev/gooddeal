<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-1">
        <span class="pl-4 section">Catégories</span>
      </div>
      <div class="col-2 offset-9 text-right">
       
          <span v-b-modal.modal-createCategory class="ajouter py-2 pr-4 pl-3">
            <a><i  class="fas fa-plus"></i>Ajouter</a>
          </span>
      
      </div>
    </div>
    <div>
      <div class="row col-12 offset-1 data-header p-3 m-3 justify-content-between">
        <div class="col-2 text-left text-capitalize">
          <span>ID</span>
        </div>
        <div class="col-4  text-capitalize">
          <span>Nom</span>
        </div>
        <div class="col-2 text-center text-capitalize">
          <span>Actions</span>
        </div>
      </div>
      <div v-for="category in categories" :key="category.id" class="row col-12 offset-1 data-row px-3 py-4 m-3 justify-content-between">
        <div class="col-2 text-left text-capitalize">
          <span>{{category.id}}</span>
        </div>
        <div class="col-4 text-left text-capitalize">
          <span>{{category.name}}</span>
        </div>
        <div class="col-2 text-center text-capitalize">
          <a v-b-modal.modal-EditCategory
              @click="[(selectedCatID = category.id,selectedCatName = category.name)]">
            <i class="far fa-edit actions"></i>
          </a>
          <a @click="deleteCategory(category.id)" exact>
            <i class="fas fa-ban ban"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="row">
      <b-modal ref="my-modal" id="modal-EditCategory"  hide-footer>
        <div class="ad p-5 category">
        <form v-on:submit.prevent="updatCategory">
          <h5 class="pb-3">Modifier le nom de catégorie</h5>
          <input type="text"  v-model="selectedCatName">
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Modifier</button>
          </div>
        </form>
        </div>
      </b-modal>
    </div>


      <div class="row">
      <b-modal ref="my-modal1" id="modal-createCategory"  hide-footer>
        <div class="ad p-5 category">
        <form v-on:submit.prevent="createCategory">
          <h5 class="pb-3">Ajouter une catégorie</h5>
          <input type="text"  v-model="createCatName" placeholder="Nom de catégorie">
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Ajouter</button>
          </div>
        </form>
        </div>
      </b-modal>
    </div>


  </div>
</template>
<script>
import axios from "axios";
import { http } from "../../services/http_service";

export default {
  data() {
    return {
      categories: [],
      errors: [],
      selectedCatID:'',
      selectedCatName:'',
      createCatName:''
    };
  },

  created() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories() {
        axios
          .get(`http://127.0.0.1:8000/api/categories/`)
          .then(response => {
            this.categories = response.data;
          })
          .catch(e => {
            this.errors.push(e);
          });
      

    },

    deleteCategory(category_id) {
      this.$fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir sur cela!",
        icon: "warning",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3580ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimez-le!",
        cancelButtonText:"Annuler"
      }).then(result => {
        if (result.value) {
          http()
            .delete(`/api/categories/${category_id}`)
            .then(response => {
              this.getAllCategories();
              return response;
            });
          this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "L'annonce a été activer avec succès",
            html:'<span class="text-white"><i class="fas fa-check-circle"></i>La catégorie a été supprimé avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container:"alert-container-class",
              popup: 'alert-popup-class',
            }
          }).then(r => {
            console.log(r.value);
          });
        }
      });
    },

    updatCategory() {
      http()
        .put(`/api/categories/${this.selectedCatID}`, {
          name: this.selectedCatName,
        })
        .then(response => {
           this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>Le nom de catégorie a été modifié avec succès</span>',
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
          this.getAllCategories();
        });
    },

    createCategory() {
      http()
        .post(`/api/categories`, {
          name: this.createCatName,
        })
        .then(response => {
           this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>La catégorie a bien été créé avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          }).then(r => {
            console.log(r.value);
          });
          this.$refs['my-modal1'].hide();
          this.getAllCategories();
        });
    }

  
    
  },
  computed: {
    user() {
      return this.$store.getters.localUserData;
    }
  }
};
</script>