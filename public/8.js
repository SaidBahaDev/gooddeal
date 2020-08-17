(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories/Categories.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories/Categories.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: [],
      errors: [],
      selectedCatID: '',
      selectedCatName: '',
      createCatName: ''
    };
  },
  created: function created() {
    this.getAllCategories();
  },
  methods: {
    getAllCategories: function getAllCategories() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://127.0.0.1:8000/api/categories/").then(function (response) {
        _this.categories = response.data;
      })["catch"](function (e) {
        _this.errors.push(e);
      });
    },
    deleteCategory: function deleteCategory(category_id) {
      var _this2 = this;

      this.$fire({
        title: "Êtes-vous sûr?",
        text: "Vous ne pourrez pas revenir sur cela!",
        icon: "warning",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3580ff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimez-le!",
        cancelButtonText: "Annuler"
      }).then(function (result) {
        if (result.value) {
          Object(_services_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])()["delete"]("/api/categories/".concat(category_id)).then(function (response) {
            _this2.getAllCategories();

            return response;
          });

          _this2.$fire({
            position: "bottom-end",
            showConfirmButton: false,
            text: "L'annonce a été activer avec succès",
            html: '<span class="text-white"><i class="fas fa-check-circle"></i>La catégorie a été supprimé avec succès</span>',
            timer: 2000,
            customClass: {
              title: "text-white",
              container: "alert-container-class",
              popup: 'alert-popup-class'
            }
          }).then(function (r) {
            console.log(r.value);
          });
        }
      });
    },
    updatCategory: function updatCategory() {
      var _this3 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().put("/api/categories/".concat(this.selectedCatID), {
        name: this.selectedCatName
      }).then(function (response) {
        _this3.$fire({
          position: "bottom-end",
          showConfirmButton: false,
          html: '<span class="text-white"><i class="fas fa-check-circle"></i>Le nom de catégorie a été modifié avec succès</span>',
          timer: 2000,
          customClass: {
            title: "text-white",
            container: "alert-container-class",
            popup: "alert-popup-class"
          }
        }).then(function (r) {
          console.log(r.value);
        });

        _this3.$refs['my-modal'].hide();

        _this3.getAllCategories();
      });
    },
    createCategory: function createCategory() {
      var _this4 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().post("/api/categories", {
        name: this.createCatName
      }).then(function (response) {
        _this4.$fire({
          position: "bottom-end",
          showConfirmButton: false,
          html: '<span class="text-white"><i class="fas fa-check-circle"></i>La catégorie a bien été créé avec succès</span>',
          timer: 2000,
          customClass: {
            title: "text-white",
            container: "alert-container-class",
            popup: "alert-popup-class"
          }
        }).then(function (r) {
          console.log(r.value);
        });

        _this4.$refs['my-modal1'].hide();

        _this4.getAllCategories();
      });
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.localUserData;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories/Categories.vue?vue&type=template&id=77d68e00&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories/Categories.vue?vue&type=template&id=77d68e00& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-2 offset-9 text-right" }, [
        _c(
          "span",
          {
            directives: [
              {
                name: "b-modal",
                rawName: "v-b-modal.modal-createCategory",
                modifiers: { "modal-createCategory": true }
              }
            ],
            staticClass: "ajouter py-2 pr-4 pl-3"
          },
          [_vm._m(1)]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm._m(2),
        _vm._v(" "),
        _vm._l(_vm.categories, function(category) {
          return _c(
            "div",
            {
              key: category.id,
              staticClass:
                "row col-12 offset-1 data-row px-3 py-4 m-3 justify-content-between"
            },
            [
              _c("div", { staticClass: "col-2 text-left text-capitalize" }, [
                _c("span", [_vm._v(_vm._s(category.id))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 text-left text-capitalize" }, [
                _c("span", [_vm._v(_vm._s(category.name))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-2 text-center text-capitalize" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal-EditCategory",
                        modifiers: { "modal-EditCategory": true }
                      }
                    ],
                    on: {
                      click: function($event) {
                        ;[
                          ((_vm.selectedCatID = category.id),
                          (_vm.selectedCatName = category.name))
                        ]
                      }
                    }
                  },
                  [_c("i", { staticClass: "far fa-edit actions" })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    attrs: { exact: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteCategory(category.id)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-ban ban" })]
                )
              ])
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
          {
            ref: "my-modal",
            attrs: { id: "modal-EditCategory", "hide-footer": "" }
          },
          [
            _c("div", { staticClass: "ad p-5 category" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updatCategory($event)
                    }
                  }
                },
                [
                  _c("h5", { staticClass: "pb-3" }, [
                    _vm._v("Modifier le nom de catégorie")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedCatName,
                        expression: "selectedCatName"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: _vm.selectedCatName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.selectedCatName = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Modifier")]
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
            ref: "my-modal1",
            attrs: { id: "modal-createCategory", "hide-footer": "" }
          },
          [
            _c("div", { staticClass: "ad p-5 category" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createCategory($event)
                    }
                  }
                },
                [
                  _c("h5", { staticClass: "pb-3" }, [
                    _vm._v("Ajouter une catégorie")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.createCatName,
                        expression: "createCatName"
                      }
                    ],
                    attrs: { type: "text", placeholder: "Nom de catégorie" },
                    domProps: { value: _vm.createCatName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.createCatName = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Ajouter")]
                    )
                  ])
                ]
              )
            ])
          ]
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
      _c("span", { staticClass: "pl-4 section" }, [_vm._v("Catégories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", { staticClass: "fas fa-plus" }), _vm._v("Ajouter")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "row col-12 offset-1 data-header p-3 m-3 justify-content-between"
      },
      [
        _c("div", { staticClass: "col-2 text-left text-capitalize" }, [
          _c("span", [_vm._v("ID")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4  text-capitalize" }, [
          _c("span", [_vm._v("Nom")])
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

/***/ "./resources/js/views/Categories/Categories.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Categories/Categories.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_77d68e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=77d68e00& */ "./resources/js/views/Categories/Categories.vue?vue&type=template&id=77d68e00&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_77d68e00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_77d68e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Categories/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Categories/Categories.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Categories/Categories.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories/Categories.vue?vue&type=template&id=77d68e00&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Categories/Categories.vue?vue&type=template&id=77d68e00& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_77d68e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=77d68e00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories/Categories.vue?vue&type=template&id=77d68e00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_77d68e00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_77d68e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);