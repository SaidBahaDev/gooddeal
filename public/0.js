(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/Ad.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Ads/Ad.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Ad',
  props: ['adID'],
  data: function data() {
    return {
      ad: {},
      review: {},
      ad_id: this.$route.params.id || this.adID,
      errors: [],
      assigned: null
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/ads/".concat(this.ad_id)).then(function (response) {
      _this.ad = response.data;
    })["catch"](function (e) {
      _this.errors.push(e);
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/ad_reviews/".concat(this.ad_id)).then(function (response) {
      _this.review = response.data;
    })["catch"](function (e) {
      _this.errors.push(e);
    });
  },
  methods: {
    chat: function chat() {},
    createAssignation: function createAssignation() {
      var _this2 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().post("/api/assignations/", {
        ad_id: this.ad_id,
        buyer_id: this.$store.getters.localUserData.user.id
      }).then(function (response) {
        console.log(response);
        _this2.assigned = true;

        _this2.$fire({
          position: "bottom-end",
          showConfirmButton: false,
          text: "Votre demande a été envoyée avec succès",
          html: '<span class="text-white"><i class="fas fa-check-circle"></i>Votre demande a été envoyée avec succès</span>',
          timer: 2000,
          customClass: {
            title: "text-white",
            container: "alert-container-class",
            popup: "alert-popup-class"
          }
        }); //this.messages = response.data;


        return response;
      });
    },
    buyerCondition: function buyerCondition() {
      if (!this.assigned && this.$store.getters.loginState && this.$store.getters.localUserData.user.role == 'buyer') {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/Ad.vue?vue&type=template&id=060c2ae1&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Ads/Ad.vue?vue&type=template&id=060c2ae1& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("main", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row pr-4" }, [
            _c("div", { staticClass: "col ad p-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-4 img_ad" }, [
                  _c("img", { attrs: { src: _vm.ad.image, alt: "" } })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-8" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c("div", { staticClass: "row justify-content-end" }, [
                        _c("div", { staticClass: "col-10 mb-4" }, [
                          _c(
                            "div",
                            { staticClass: "text-capitalize title title_ad" },
                            [_vm._v(_vm._s(_vm.ad.title))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-2 text-right" }, [
                          _c("div", { staticClass: "price" }, [
                            _vm._v(_vm._s(_vm.ad.price) + "$")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-1 text-right" }, [
                          _vm.buyerCondition()
                            ? _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover",
                                      modifiers: { hover: true }
                                    }
                                  ],
                                  staticClass: "commander",
                                  attrs: { title: "Commander" },
                                  on: {
                                    click: function($event) {
                                      return _vm.createAssignation()
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-cart-arrow-down"
                                  })
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-1 text-right mr-3" },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "conversation",
                                    params: {
                                      adId: _vm.ad_id,
                                      buyerId:
                                        _vm.$store.getters.localUserData.user.id
                                    }
                                  }
                                }
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    directives: [
                                      {
                                        name: "b-tooltip",
                                        rawName: "v-b-tooltip.hover",
                                        modifiers: { hover: true }
                                      }
                                    ],
                                    staticClass: "commander",
                                    attrs: { title: "Envoyer un message" },
                                    on: {
                                      click: function($event) {
                                        return _vm.chat()
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fas fa-comments" })]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-1" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-6" }, [
                            _c("p", [
                              _c("b", [_vm._v("Ville : ")]),
                              _vm._v(_vm._s(_vm.ad.location))
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("b", [_vm._v("Fournisseur : ")]),
                              _vm._v(
                                _vm._s(_vm.ad.user.first_name) +
                                  " " +
                                  _vm._s(_vm.ad.user.last_name)
                              )
                            ]),
                            _vm._v(" "),
                            _vm.ad.budget
                              ? _c("p", [
                                  _c("b", [_vm._v("Budget : ")]),
                                  _vm._v(_vm._s(_vm.ad.budget))
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-6" }, [
                            _c("p", [
                              _c("b", [_vm._v("Type : ")]),
                              _vm._v(_vm._s(_vm.ad.type))
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("b", [_vm._v("Categorie : ")]),
                              _vm._v(_vm._s(_vm.ad.category.name))
                            ]),
                            _vm._v(" "),
                            _vm.review
                              ? _c("p", [_vm._m(0), _vm._v(_vm._s(_vm.review))])
                              : _vm._e()
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                  Description :\n                  "
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                  " +
                        _vm._s(_vm.ad.description) +
                        "\n                "
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [_c("i", { staticClass: "fas fa-star map" })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Ads/Ad.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Ads/Ad.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ad_vue_vue_type_template_id_060c2ae1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ad.vue?vue&type=template&id=060c2ae1& */ "./resources/js/views/Ads/Ad.vue?vue&type=template&id=060c2ae1&");
/* harmony import */ var _Ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ad.vue?vue&type=script&lang=js& */ "./resources/js/views/Ads/Ad.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ad_vue_vue_type_template_id_060c2ae1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ad_vue_vue_type_template_id_060c2ae1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Ads/Ad.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Ads/Ad.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Ads/Ad.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ad.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/Ad.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ad_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Ads/Ad.vue?vue&type=template&id=060c2ae1&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Ads/Ad.vue?vue&type=template&id=060c2ae1& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ad_vue_vue_type_template_id_060c2ae1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Ad.vue?vue&type=template&id=060c2ae1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Ads/Ad.vue?vue&type=template&id=060c2ae1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ad_vue_vue_type_template_id_060c2ae1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ad_vue_vue_type_template_id_060c2ae1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);