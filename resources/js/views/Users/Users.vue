<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-1">
        <span class="pl-4 section">Utilisateurs</span>
      </div>
      <div class="col-2 offset-9 text-right">
        <router-link to="/register" exact>
          <span class="ajouter py-2 pr-4 pl-3">
            <i class="fas fa-plus"></i>Ajouter
          </span>
        </router-link>
      </div>
    </div>

    <div>
      <div class="row col-12 offset-1 data-header p-3 m-3">
        <div class="col-3 text-capitalize">
          <span>Nom</span>
        </div>
        <div class="col-4 text-capitalize">
          <span>Courriel</span>
        </div>
        <!-- <div class="col-3 text-center text-capitalize">
          <span>Nom entreprise</span>
        </div>-->
        <div class="col-2 text-center text-capitalize">
          <span>Role</span>
        </div>
        <div class="col-1 text-center text-capitalize">
          <span>Etat</span>
        </div>
        <div class="col-2 text-center text-capitalize">
          <span>Actions</span>
        </div>
      </div>

      <div v-for="user in users" :key="user.id">
        <template
          v-if="(role === 'super-admin') ||  (user.role!='super-admin' && user.role!='admin')"
        >
          <div class="row col-12 offset-1 data-row px-3 py-4 m-3">
            <div class="col-3 text-left text-capitalize">
              <span>{{user.first_name}} {{user.last_name}}</span>
            </div>
            <div class="col-4 text-left">
              <span>{{user.email}}</span>
            </div>
            <!-- <div class="col-3 text-center text-capitalize">
                    <span>{{ user.company_name }}</span>
            </div>-->
            <div class="col-2 text-center text-capitalize">
              <span>{{ user.role }}</span>
            </div>
            <div class="col-1 text-center text-capitalize">
              <span
                v-b-tooltip.hover
                :title="[(user.state == 1 ? 'Active' : ''), (user.state == 0 ? 'Inactive' : ''), (user.state == null ? 'En attente' : '')]"
              >
                <i
                  :class="[(user.state == 1 ? 'activeState' : ''), (user.state == 0 ? 'NotactiveState' : ''), (user.state == null ? 'nullState' : '')]"
                  class="fas fa-circle"
                ></i>
              </span>
            </div>
            <div class="col-2 text-center text-capitalize">
              <a 
              v-b-modal.modal-Profile
            @click="modalProfile = user.id"
               v-b-tooltip.hover title="Voir">
                <i class="far fa-eye actions"></i>
              </a>
              <a  v-b-modal.modal-Edit
            @click="selectedUserEdit = user.id"
             v-b-tooltip.hover title="Modifier">
                <i class="far fa-edit actions"></i>
              </a>
              <a @click="enableUser(user.id)" exact v-b-tooltip.hover title="Activer">
                <i class="far fa-check-circle accept"></i>
              </a>
              <a @click="disableUser(user.id)" exact v-b-tooltip.hover title="Désactiver">
                <i class="fas fa-ban ban"></i>
              </a>
            </div>
          </div>
        </template>
        <!--  v-if end -->
      </div>
      <!-- v-for end -->
    </div>


     <div class="row">
          <b-modal ref="modal-Edit" id="modal-Edit" size="xl" hide-footer>
            <edit v-bind:userId="selectedUserEdit" v-on:refrechUsers="getAllUsers" />
          </b-modal>
        </div>

        <div class="row">
          <b-modal ref="modal-profile" id="modal-Profile" size="xl" hide-footer>
            <Profile v-bind:userID="modalProfile" />
          </b-modal>
        </div>

  </div>
</template>
<script>
import { http } from "../../services/http_service";
import Profile from "../Users/Profile";
import edit from "../Users/EditUser";

export default {
  components: {
    Profile,
    edit 
  },
  data() {
    return {
      role: "",
      users: [],
      errors: [],
      selectedUserEdit:'',
      modalProfile:''
    };
  },

  methods: {
    getAllUsers() {
      http()
        .get(`http://127.0.0.1:8000/api/users`)
        .then(response => {
          this.users = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },

    getUser(id) {
      this.$router.push(`profile/${id}`);
    },

    editUser(user) {
      this.$router.push({ name: "edit", params: { userId: user.id } });
    },

    disableUser(id) {
      this.$fire({
        title: "Êtes-vous sûr?",
        text: "Êtes-vous sûr de vouloir désactiver cet utilisateur?",
        icon: "warning",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3580ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, désactiver-le!",
        cancelButtonText: "Annuler"
      }).then(result => {
        if (result.value) {
          http()
            .put("/api/users_disable/" + id)
            .then(response => {
              this.getAllUsers();
              return response;
            });
          this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "L'utilisateur désactivé avec succès",
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>L\'utilisateur est désactivé avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          }).then(r => {
            // console.log(r.value);
          });
        }
      });
    },

    // Activer l'utilisateur
    enableUser(id) {
      http()
        .put("/api/users_enable/" + id)
        .then(response => {
          this.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "L'utilisateur activé avec succès",
            html:
              '<span class="text-white"><i class="fas fa-check-circle"></i>L\'utilisateur activé avec succès</span>',
            timer: 3000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          }).then(r => {
            //console.log(r.value);
          });
          this.getAllUsers();
          return response.data;
        })
        .catch(error => {
          //console.log(error)
        });
    }
  },

  created() {
    /* this.role = localStorage.gooddeal-token.Token.Token.user.role; */
    const gd = JSON.parse(localStorage.getItem("gooddeal-token"));
    this.role = gd.user.role;
    this.getAllUsers();
  }
};
</script>
