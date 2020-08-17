(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/EditAd.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Ads/EditAd.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "editAd",
  props: ['adID'],
  data: function data() {
    return {
      ad_id: this.$route.params.id || this.adID,
      ad: {// title: "",
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
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://127.0.0.1:8000/api/ads/".concat(this.ad_id)).then(function (response) {
      _this.ad = response.data;

      if (_this.ad.type == "produit") {
        _this.product = true;
        _this.service = false;
      }

      if (_this.ad.type == "service") {
        _this.product = false;
        _this.service = true;
      }
    })["catch"](function (e) {
      _this.errors.push(e);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://127.0.0.1:8000/api/categories").then(function (response) {
      _this.categories = response.data;
    })["catch"](function (e) {
      _this.errors.push(e);
    });

    if (this.$store.getters.localUserData.user.role == "admin" || this.$store.getters.localUserData.user.role == "super-admin") {
      this.ad.user_id = "";
      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/api/sellers").then(function (response) {
        _this.sellers = response.data;
        return response;
      });
    }
  },
  methods: {
    updateAd: function updateAd() {
      var _this2 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/api/ads/".concat(this.ad_id), this.ad).then(function (response) {
        _this2.errors = {};
        _this2.messages = response.data;

        _this2.$fire({
          title: "Succès",
          text: "L'annonce a été modifié avec succès",
          type: "success",
          timer: 1000,
          customClass: {
            title: "alertSuccesTitle",
            confirmButton: "alertSuccesBtn"
          }
        }).then(function (r) {
          console.log(r.value);
        });

        _this2.$root.$emit('bv::hide::modal', 'modal-EditAd');

        _this2.$emit('refrechads');

        _this2.$router.push("/annonces");
      })["catch"](function (error) {
        _this2.errors = error.response.data.error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/EditAd.vue?vue&type=template&id=7bd5128b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Ads/EditAd.vue?vue&type=template&id=7bd5128b& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container ad createAd px-5 py-5" }, [
    _c("h1", { staticClass: " m-5" }, [_vm._v("Modifier une annonce")]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "pt-3 px-5 mx-3",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.updateAd($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "form-label-group col-12 mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ad.title,
                  expression: "ad.title"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "title",
                placeholder: "Titre",
                autofocus: ""
              },
              domProps: { value: _vm.ad.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.ad, "title", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.title
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(_vm._s(_vm.errors.title[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-label-group col-12 mb-3" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ad.description,
                  expression: "ad.description"
                }
              ],
              staticClass: "form-control",
              attrs: {
                rows: "7",
                cols: "50",
                id: "description",
                placeholder: "Description"
              },
              domProps: { value: _vm.ad.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.ad, "description", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.description
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(_vm._s(_vm.errors.description[0]))
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm.service
            ? _c("div", { staticClass: "form-label-group col-4 mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ad.location,
                      expression: "ad.location"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "location",
                    placeholder: "Lieu de réalisation",
                    value: ""
                  },
                  domProps: { value: _vm.ad.location },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ad, "location", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.location
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.location[0]))
                    ])
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.service
            ? _c("div", { staticClass: "form-label-group col-4 mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ad.estimated_time,
                      expression: "ad.estimated_time"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "estimated_time",
                    placeholder: "Délai de réalisation",
                    value: ""
                  },
                  domProps: { value: _vm.ad.estimated_time },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ad, "estimated_time", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.estimated_time
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.estimated_time[0]))
                    ])
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.service
            ? _c("div", { staticClass: "form-label-group col-md-4 mb-3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ad.budget,
                      expression: "ad.budget"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "budget",
                    placeholder: "Budget",
                    value: ""
                  },
                  domProps: { value: _vm.ad.budget },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.ad, "budget", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.budget
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.budget[0]))
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-end" }, [
          _c("div", { staticClass: "form-label-group col-4 mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.ad.price,
                  expression: "ad.price"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "price",
                placeholder: "Prix",
                value: ""
              },
              domProps: { value: _vm.ad.price },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.ad, "price", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.errors.price
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(_vm._s(_vm.errors.price[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-label-group col-4 mb-3" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.ad.category_id,
                    expression: "ad.category_id"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "category", id: "category" },
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
                    _vm.$set(
                      _vm.ad,
                      "category_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", default: "" } }, [
                  _vm._v("Categorie")
                ]),
                _vm._v(" "),
                _vm._l(_vm.categories, function(category) {
                  return _c(
                    "option",
                    { key: category.id, domProps: { value: category.id } },
                    [_vm._v(_vm._s(category.name))]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _vm.errors.category_id
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(_vm._s(_vm.errors.category_id[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.loggeduser.user.role == "admin" ||
          _vm.loggeduser.user.role == "super-admin"
            ? _c("div", { staticClass: "form-label-group col-4 mb-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.ad.user_id,
                        expression: "ad.user_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "user", id: "user" },
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
                        _vm.$set(
                          _vm.ad,
                          "user_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "", default: "" } }, [
                      _vm._v("Vendeur")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.sellers, function(seller) {
                      return _c(
                        "option",
                        { key: seller.id, domProps: { value: seller.id } },
                        [
                          _vm._v(
                            _vm._s(seller.id) +
                              " " +
                              _vm._s(seller.first_name) +
                              " " +
                              _vm._s(seller.last_name)
                          )
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.user_id
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(_vm._s(_vm.errors.user_id[0]))
                    ])
                  : _vm._e()
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-block text-uppercase",
          attrs: { type: "submit" }
        },
        [_vm._v("Modifier l'annonce")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Ads/EditAd.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Ads/EditAd.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditAd_vue_vue_type_template_id_7bd5128b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAd.vue?vue&type=template&id=7bd5128b& */ "./resources/js/views/Ads/EditAd.vue?vue&type=template&id=7bd5128b&");
/* harmony import */ var _EditAd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAd.vue?vue&type=script&lang=js& */ "./resources/js/views/Ads/EditAd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditAd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditAd_vue_vue_type_template_id_7bd5128b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditAd_vue_vue_type_template_id_7bd5128b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Ads/EditAd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Ads/EditAd.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Ads/EditAd.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditAd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/EditAd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Ads/EditAd.vue?vue&type=template&id=7bd5128b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Ads/EditAd.vue?vue&type=template&id=7bd5128b& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAd_vue_vue_type_template_id_7bd5128b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditAd.vue?vue&type=template&id=7bd5128b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/EditAd.vue?vue&type=template&id=7bd5128b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAd_vue_vue_type_template_id_7bd5128b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAd_vue_vue_type_template_id_7bd5128b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);