(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Profile",
  props: ['userID'],
  data: function data() {
    return {
      role: "",
      userId: '',
      profile_id: this.$route.params.id || this.userID,
      profile: {},
      errors: []
    };
  },
  methods: {
    editUser: function editUser(user) {
      this.$router.push({
        name: 'edit',
        params: {
          userId: user.id
        }
      });
    }
  },
  created: function created() {
    var _this = this;

    var gd = JSON.parse(localStorage.getItem('gooddeal-token'));

    if (gd) {
      this.role = gd.user.role;
      this.userId = gd.user.id;
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/users/".concat(this.profile_id)).then(function (response) {
      _this.profile = response.data;
    })["catch"](function (e) {
      _this.errors.push(e);
    });
  },
  computed: {
    roleTranslate: function roleTranslate() {
      if (this.profile.role == "buyer") {
        return "Acheteur";
      }

      if (this.profile.role == "seller") {
        return "Fournisseur";
      }

      return this.profile.role;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
/* harmony import */ var _Users_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Users/Profile */ "./resources/js/views/Users/Profile.vue");
/* harmony import */ var _Users_EditUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Users/EditUser */ "./resources/js/views/Users/EditUser.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Profile: _Users_Profile__WEBPACK_IMPORTED_MODULE_1__["default"],
    edit: _Users_EditUser__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      role: "",
      users: [],
      errors: [],
      selectedUserEdit: '',
      modalProfile: ''
    };
  },
  methods: {
    getAllUsers: function getAllUsers() {
      var _this = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("http://127.0.0.1:8000/api/users").then(function (response) {
        _this.users = response.data;
      })["catch"](function (e) {
        _this.errors.push(e);
      });
    },
    getUser: function getUser(id) {
      this.$router.push("profile/".concat(id));
    },
    editUser: function editUser(user) {
      this.$router.push({
        name: "edit",
        params: {
          userId: user.id
        }
      });
    },
    disableUser: function disableUser(id) {
      var _this2 = this;

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
      }).then(function (result) {
        if (result.value) {
          Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/api/users_disable/" + id).then(function (response) {
            _this2.getAllUsers();

            return response;
          });

          _this2.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "L'utilisateur désactivé avec succès",
            html: '<span class="text-white"><i class="fas fa-check-circle"></i>L\'utilisateur est désactivé avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: "alert-popup-class"
            }
          }).then(function (r) {// console.log(r.value);
          });
        }
      });
    },
    // Activer l'utilisateur
    enableUser: function enableUser(id) {
      var _this3 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/api/users_enable/" + id).then(function (response) {
        _this3.$fire({
          position: "bottom-end",
          showConfirmButton: false,
          text: "L'utilisateur activé avec succès",
          html: '<span class="text-white"><i class="fas fa-check-circle"></i>L\'utilisateur activé avec succès</span>',
          timer: 3000,
          customClass: {
            title: "text-white",
            container: "alert-container-class",
            popup: "alert-popup-class"
          }
        }).then(function (r) {//console.log(r.value);
        });

        _this3.getAllUsers();

        return response.data;
      })["catch"](function (error) {//console.log(error)
      });
    }
  },
  created: function created() {
    /* this.role = localStorage.gooddeal-token.Token.Token.user.role; */
    var gd = JSON.parse(localStorage.getItem("gooddeal-token"));
    this.role = gd.user.role;
    this.getAllUsers();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Profile.vue?vue&type=template&id=c772de1a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Profile.vue?vue&type=template&id=c772de1a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Main", [
    _c("div", { staticClass: "container py-5 mb-3 ad profile" }, [
      _c("div", { staticClass: "mb-5 vertical-align" }, [
        _c("img", {
          staticClass: "profile-avatar",
          attrs: { src: "../storage/img/avatar.svg" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "role" }, [
          _vm._v(_vm._s(_vm.roleTranslate))
        ]),
        _vm._v(" "),
        _vm.role == "super-admin" ||
        _vm.role === "admin" ||
        _vm.profile_id === _vm.userId
          ? _c("span", { staticClass: "align-self-end ml-auto" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button align-self-end ml-auto" }
                },
                [
                  _c(
                    "a",
                    {
                      attrs: { exact: "" },
                      on: {
                        click: function($event) {
                          return _vm.editUser(_vm.profile)
                        }
                      }
                    },
                    [
                      _vm._v("Modifier\n                  "),
                      _c("i", {
                        staticClass: "far fa-edit actions btn-primary"
                      })
                    ]
                  )
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("h1", { staticClass: "text-center text-capitalize" }, [
          _vm._v(
            _vm._s(_vm.profile.first_name) + " " + _vm._s(_vm.profile.last_name)
          )
        ])
      ]),
      _vm._v(" "),
      _vm.profile.address
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "far fa-envelope" }),
              _vm._v("Adresse :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.address))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.email
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fas fa-at" }),
              _vm._v("E-mail :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.email))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.company_name
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fas fa-briefcase" }),
              _vm._v("Nom d'entreprise :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.company_name))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.company_number
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fas fa-briefcase" }),
              _vm._v("Numero d'entreprise :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.company_number))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.phone
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fas fa-phone-square" }),
              _vm._v("Numero de Mobile :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.phone))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.website
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fas fa-globe" }),
              _vm._v("Site web :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.website))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.linkedin_link
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fab fa-linkedin" }),
              _vm._v("LinkedIn:")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.linkedin_link))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.profile.facebook_link
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-3 offset-2 font-weight-bold mb-3" }, [
              _c("i", { staticClass: "fab fa-facebook-square" }),
              _vm._v("Facebook :")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _vm._v(_vm._s(_vm.profile.facebook_link))
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-2 offset-9 text-right" },
        [
          _c("router-link", { attrs: { to: "/register", exact: "" } }, [
            _c("span", { staticClass: "ajouter py-2 pr-4 pl-3" }, [
              _c("i", { staticClass: "fas fa-plus" }),
              _vm._v("Ajouter\n        ")
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm._m(1),
        _vm._v(" "),
        _vm._l(_vm.users, function(user) {
          return _c(
            "div",
            { key: user.id },
            [
              _vm.role === "super-admin" ||
              (user.role != "super-admin" && user.role != "admin")
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "row col-12 offset-1 data-row px-3 py-4 m-3"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "col-3 text-left text-capitalize" },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(user.first_name) +
                                  " " +
                                  _vm._s(user.last_name)
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4 text-left" }, [
                          _c("span", [_vm._v(_vm._s(user.email))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-2 text-center text-capitalize" },
                          [_c("span", [_vm._v(_vm._s(user.role))])]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-1 text-center text-capitalize" },
                          [
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: {
                                  title: [
                                    user.state == 1 ? "Active" : "",
                                    user.state == 0 ? "Inactive" : "",
                                    user.state == null ? "En attente" : ""
                                  ]
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-circle",
                                  class: [
                                    user.state == 1 ? "activeState" : "",
                                    user.state == 0 ? "NotactiveState" : "",
                                    user.state == null ? "nullState" : ""
                                  ]
                                })
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-2 text-center text-capitalize" },
                          [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal.modal-Profile",
                                    modifiers: { "modal-Profile": true }
                                  },
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: { title: "Voir" },
                                on: {
                                  click: function($event) {
                                    _vm.modalProfile = user.id
                                  }
                                }
                              },
                              [_c("i", { staticClass: "far fa-eye actions" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal.modal-Edit",
                                    modifiers: { "modal-Edit": true }
                                  },
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: { title: "Modifier" },
                                on: {
                                  click: function($event) {
                                    _vm.selectedUserEdit = user.id
                                  }
                                }
                              },
                              [_c("i", { staticClass: "far fa-edit actions" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: { exact: "", title: "Activer" },
                                on: {
                                  click: function($event) {
                                    return _vm.enableUser(user.id)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-check-circle accept"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover",
                                    modifiers: { hover: true }
                                  }
                                ],
                                attrs: { exact: "", title: "Désactiver" },
                                on: {
                                  click: function($event) {
                                    return _vm.disableUser(user.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-ban ban" })]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "b-modal",
          {
            ref: "modal-Edit",
            attrs: { id: "modal-Edit", size: "xl", "hide-footer": "" }
          },
          [
            _c("edit", {
              attrs: { userId: _vm.selectedUserEdit },
              on: { refrechUsers: _vm.getAllUsers }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "b-modal",
          {
            ref: "modal-profile",
            attrs: { id: "modal-Profile", size: "xl", "hide-footer": "" }
          },
          [_c("Profile", { attrs: { userID: _vm.modalProfile } })],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1" }, [
      _c("span", { staticClass: "pl-4 section" }, [_vm._v("Utilisateurs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "row col-12 offset-1 data-header p-3 m-3" },
      [
        _c("div", { staticClass: "col-3 text-capitalize" }, [
          _c("span", [_vm._v("Nom")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 text-capitalize" }, [
          _c("span", [_vm._v("Courriel")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2 text-center text-capitalize" }, [
          _c("span", [_vm._v("Role")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-1 text-center text-capitalize" }, [
          _c("span", [_vm._v("Etat")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-2 text-center text-capitalize" }, [
          _c("span", [_vm._v("Actions")])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Users/Profile.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Users/Profile.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_c772de1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=c772de1a& */ "./resources/js/views/Users/Profile.vue?vue&type=template&id=c772de1a&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_c772de1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_c772de1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Users/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/Profile.vue?vue&type=template&id=c772de1a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Users/Profile.vue?vue&type=template&id=c772de1a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_c772de1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=c772de1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Profile.vue?vue&type=template&id=c772de1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_c772de1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_c772de1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Users/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=16441b5c& */ "./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Users/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=16441b5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);