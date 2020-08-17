(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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