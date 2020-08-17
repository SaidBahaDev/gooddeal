(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Assignations/Assignations.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Assignations/Assignations.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ads_Ad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ads/Ad */ "./resources/js/views/Ads/Ad.vue");
/* harmony import */ var _Users_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Users/Profile */ "./resources/js/views/Users/Profile.vue");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
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
    Ad: _Ads_Ad__WEBPACK_IMPORTED_MODULE_1__["default"],
    Profile: _Users_Profile__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      assignations: [],
      errors: [],
      ad_id: "",
      score: "",
      modalViewAd: "",
      modalProfile: ""
    };
  },
  created: function created() {
    this.getAssignations();
  },
  methods: {
    getAssignations: function getAssignations() {
      var _this = this;

      if (this.$store.getters.localUserData.user.role == "admin" || this.$store.getters.localUserData.user.role == "super-admin") {
        Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().get("/api/assignations").then(function (response) {
          _this.assignations = response.data;
          return response;
        });
      }

      if (this.$store.getters.localUserData.user.role == "buyer" || this.$store.getters.localUserData.user.role == "seller") {
        Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().get("/api/myassignations").then(function (response) {
          _this.assignations = response.data;
          return response;
        });
      }
    },
    stateAccept: function stateAccept($id) {
      var _this2 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().put("/api/acceptassignation/".concat($id), this.assignation).then(function (response) {
        if (_this2.$store.getters.localUserData.user.role == "admin" || _this2.$store.getters.localUserData.user.role == "super-admin") {
          Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().get("/api/assignations").then(function (response) {
            _this2.$fire({
              position: "bottom-end",
              showConfirmButton: false,
              text: "L'annonce a été activer avec succès",
              html: '<span class="text-white"><i class="fas fa-check-circle"></i>L\'annonce a été activer avec succès</span>',
              timer: 2000,
              customClass: {
                title: "text-white",
                container: "alert-container-class",
                popup: "alert-popup-class"
              }
            });

            _this2.assignations = response.data;
            return response;
          });
        }

        if (_this2.$store.getters.localUserData.user.role == "buyer" || _this2.$store.getters.localUserData.user.role == "seller") {
          Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().get("/api/myassignations").then(function (response) {
            _this2.$fire({
              position: "bottom-end",
              showConfirmButton: false,
              text: "L'annonce a été activer avec succès",
              html: '<span class="text-white"><i class="fas fa-check-circle"></i>L\'annonce a été activer avec succès</span>',
              timer: 2000,
              customClass: {
                title: "text-white",
                container: "alert-container-class",
                popup: "alert-popup-class"
              }
            });

            _this2.assignations = response.data;
            return response;
          });
        }

        _this2.errors = {};
        _this2.messages = response.data;
      })["catch"](function (error) {
        _this2.errors = error.response.data.error;
      });
    },
    stateRefuse: function stateRefuse($id) {
      var _this3 = this;

      this.$fire({
        title: "Êtes-vous sûr?",
        text: this.$store.getters.localUserData.user.role == "seller" ? "Vous pourrez le modifier plus tard" : "",
        icon: "warning",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3580ff",
        cancelButtonColor: "#d33",
        confirmButtonText: this.$store.getters.localUserData.user.role == "seller" ? "Oui, refuser la demande!" : "Oui, désactiver la demande!",
        cancelButtonText: "Annuler"
      }).then(function (result) {
        if (result.value) {
          Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().put("/api/denieassignation/".concat($id), _this3.assignation).then(function (response) {
            if (_this3.$store.getters.localUserData.user.role == "admin" || _this3.$store.getters.localUserData.user.role == "super-admin") {
              Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().get("/api/assignations").then(function (response) {
                _this3.$fire({
                  position: "bottom-end",
                  showConfirmButton: false,
                  text: "La demande d'achat a été désactiver avec succès",
                  html: '<span class="text-white"><i class="fas fa-check-circle"></i>La demande d\'achat a été désactivée avec succès</span>',
                  timer: 2000,
                  customClass: {
                    title: "text-white",
                    container: "alert-container-class",
                    popup: "alert-popup-class"
                  }
                });

                _this3.assignations = response.data;
                return response;
              });
            }

            if (_this3.$store.getters.localUserData.user.role == "seller") {
              Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().get("/api/myassignations").then(function (response) {
                _this3.$fire({
                  position: "bottom-end",
                  showConfirmButton: false,
                  text: "L'annonce a été activer avec succès",
                  html: '<span class="text-white"><i class="fas fa-check-circle"></i>La demande d\'achat a été refusée avec succès</span>',
                  timer: 2000,
                  customClass: {
                    title: "text-white",
                    container: "alert-container-class",
                    popup: "alert-popup-class"
                  }
                });

                _this3.assignations = response.data;
                return response;
              });
            }

            _this3.errors = {};
          })["catch"](function (error) {
            _this3.errors = error.response.data.error;
          });
        }
      });
    },
    getProfile: function getProfile(buyer_id) {
      this.$router.push({
        name: "profile",
        params: {
          id: buyer_id
        }
      }); //this.$router.push(`profile/${id}`)
    },
    getAd: function getAd(ad_id) {
      this.$router.push({
        name: "assignations",
        params: {
          ad_id: ad_id
        }
      });
    },
    setAdId: function setAdId(id) {
      this.ad_id = 5;
    },
    addreview: function addreview() {
      var _this4 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_3__["http"])().post("/api/reviews/", {
        score: this.score,
        ad_id: this.ad_id
      }).then(function (response) {
        _this4.$fire({
          position: "bottom-end",
          showConfirmButton: false,
          html: '<span class="text-white"><i class="fas fa-check-circle"></i>La note a été envoyé avec succès, Merci</span>',
          timer: 2000,
          customClass: {
            title: "text-white",
            container: "alert-container-class",
            popup: "alert-popup-class"
          }
        }).then(function (r) {
          console.log(r.value);
        });

        _this4.$refs['my-modal'].hide();

        _this4.getAssignations();
      });
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Assignations/Assignations.vue?vue&type=template&id=205ccb60&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Assignations/Assignations.vue?vue&type=template&id=205ccb60& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("div", { staticClass: "row col-12 offset-1 data-header p-3 m-3" }, [
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm.$store.getters.localUserData.user.role == "buyer"
            ? _c("div", { staticClass: "col-2 text-center text-capitalize" }, [
                _c("span", [_vm._v("Evaluer")])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          this.$store.getters.localUserData.user.role != "buyer"
            ? _c("div", { staticClass: "col-2 text-center text-capitalize" }, [
                _c("span", [_vm._v("Actions")])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._l(_vm.assignations, function(assignation) {
          return _c(
            "div",
            {
              key: assignation.id,
              staticClass: "row col-12 offset-1 data-row px-3 py-4 m-3"
            },
            [
              _c("div", { staticClass: "col-4 text-left text-capitalize" }, [
                _c("span", [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-viewAd",
                          modifiers: { "modal-viewAd": true }
                        }
                      ],
                      staticClass: "data-clickable",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.modalViewAd = assignation.ad_id
                        }
                      }
                    },
                    [_vm._v(_vm._s(assignation.ad.title))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-2 text-left text-capitalize" }, [
                _c("span", { staticClass: "test" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-Profile",
                          modifiers: { "modal-Profile": true }
                        }
                      ],
                      staticClass: "data-clickable",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.modalProfile = assignation.seller_id
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(assignation.seller.first_name) +
                          " " +
                          _vm._s(assignation.seller.last_name)
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3 text-center text-capitalize" }, [
                _c("span", [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-modal",
                          rawName: "v-b-modal.modal-Profile",
                          modifiers: { "modal-Profile": true }
                        }
                      ],
                      staticClass: "data-clickable",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          _vm.modalProfile = assignation.buyer_id
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(assignation.buyer.first_name) +
                          " " +
                          _vm._s(assignation.buyer.last_name)
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.$store.getters.localUserData.user.role == "buyer"
                ? _c(
                    "div",
                    { staticClass: "col-2 text-center text-capitalize" },
                    [
                      assignation.state == 1 && assignation.reviewed == !1
                        ? _c("span", [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal.modal-Review",
                                    modifiers: { "modal-Review": true }
                                  }
                                ],
                                staticClass: "btn btn-primary text-light",
                                on: {
                                  click: function($event) {
                                    _vm.ad_id = assignation.ad_id
                                  }
                                }
                              },
                              [_vm._v("Noter")]
                            )
                          ])
                        : _c("span", [
                            _c(
                              "button",
                              {
                                staticClass: "disactiver",
                                attrs: { type: "button" }
                              },
                              [_vm._v("Noter")]
                            )
                          ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-1 text-center text-capitalize" }, [
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
                        assignation.state == 1 ? "Active" : "",
                        assignation.state == 0 ? "Inactive" : "",
                        assignation.state == null ? "En attente" : ""
                      ]
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-circle",
                      class: [
                        assignation.state == 1 ? "activeState" : "",
                        assignation.state == 0 ? "NotactiveState" : "",
                        assignation.state == null ? "nullState" : ""
                      ]
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.$store.getters.localUserData.user.role != "buyer"
                ? _c(
                    "div",
                    { staticClass: "col-2 text-center text-capitalize" },
                    [
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
                          attrs: { exact: "", title: "Accepter" },
                          on: {
                            click: function($event) {
                              return _vm.stateAccept(assignation.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "far fa-check-circle accept" })]
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
                          attrs: { exact: "", title: "Refuser" },
                          on: {
                            click: function($event) {
                              return _vm.stateRefuse(assignation.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-ban ban" })]
                      )
                    ]
                  )
                : _vm._e()
            ]
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
          { ref: "my-modal", attrs: { id: "modal-Review", "hide-footer": "" } },
          [
            _c("div", { staticClass: "ad p-5 review" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addreview($event)
                    }
                  }
                },
                [
                  _c("h5", { staticClass: "pb-3" }, [
                    _vm._v("Évaluer ce vendeur")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.score,
                          expression: "score"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "score", id: "score" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.score = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "", default: "" } }, [
                        _vm._v("Selectionner un score")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "4" } }, [_vm._v("4")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "5" } }, [_vm._v("5")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Envoyer")]
                    )
                  ])
                ]
              )
            ])
          ]
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
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "b-modal",
          { attrs: { id: "modal-viewAd", size: "xl", "hide-footer": "" } },
          [_c("Ad", { attrs: { adID: _vm.modalViewAd } })],
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
    return _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-1" }, [
        _c("span", { staticClass: "pl-4 section" }, [_vm._v("Commandes")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-4 text-left text-capitalize" }, [
      _c("span", [_vm._v("Produit/Service")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-left text-capitalize" }, [
      _c("span", [_vm._v("Vendeur")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 text-center text-capitalize" }, [
      _c("span", [_vm._v("Acheteur")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-1 text-center text-capitalize" }, [
      _c("span", [_vm._v("Etat")])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/views/Assignations/Assignations.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/Assignations/Assignations.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assignations_vue_vue_type_template_id_205ccb60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assignations.vue?vue&type=template&id=205ccb60& */ "./resources/js/views/Assignations/Assignations.vue?vue&type=template&id=205ccb60&");
/* harmony import */ var _Assignations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assignations.vue?vue&type=script&lang=js& */ "./resources/js/views/Assignations/Assignations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Assignations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Assignations_vue_vue_type_template_id_205ccb60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Assignations_vue_vue_type_template_id_205ccb60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Assignations/Assignations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Assignations/Assignations.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Assignations/Assignations.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assignations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Assignations/Assignations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Assignations/Assignations.vue?vue&type=template&id=205ccb60&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Assignations/Assignations.vue?vue&type=template&id=205ccb60& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignations_vue_vue_type_template_id_205ccb60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Assignations.vue?vue&type=template&id=205ccb60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Assignations/Assignations.vue?vue&type=template&id=205ccb60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignations_vue_vue_type_template_id_205ccb60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Assignations_vue_vue_type_template_id_205ccb60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);