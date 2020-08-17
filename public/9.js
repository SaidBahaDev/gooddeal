(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Messages.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages/Messages.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      role: "",
      messagesMap: new Object(),
      errors: [],
      get_keys: []
    };
  },
  methods: {
    getConversation: function getConversation(conversation) {
      this.$router.push("conversation/".concat(conversation));
    }
  },
  created: function created() {
    var _this = this;

    var gd = JSON.parse(localStorage.getItem('gooddeal-token'));

    if (gd) {
      this.sender_id = gd.user.id;
      this.role = gd.user.role;
    }

    Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/messages/').then(function (response) {
      var messages = response.data;
      console.log(messages); // map qui contient les messages selon Ad et buyer

      _this.messagesMap = {}; // Calculer  les ad_id uniques

      var tabUniqueAd = []; //calculer tous les ad_id meme repetes

      for (var i = 0; i < messages.length; i++) {
        tabUniqueAd.push(messages[i].ad_id);
      } // supprimer les ad_id redondants et ne laisser que unique ad_id


      tabUniqueAd = tabUniqueAd.filter(function (item, i, arr) {
        return arr.indexOf(item) === i;
      });
      /*******        Buyer          ************************************************************* */

      if (_this.role == "buyer") {
        var _loop = function _loop(_i) {
          //   pour chaque ad
          // chercher les messages pour chaque Ad et pour chaque buyer
          var messageAd = messages.filter(function (message) {
            return message.ad_id == tabUniqueAd[_i];
          });
          var key = tabUniqueAd[_i];
          _this.messagesMap[key] = messageAd;
        };

        for (var _i = 0; _i < tabUniqueAd.length; _i++) {
          _loop(_i);
        } // getting all the keys of the map


        _this.get_keys = Object.keys(_this.messagesMap);
      }

      console.log("unique AD : ");
      console.log(tabUniqueAd);
      /*******        Seller           ************************************************************* */

      if (_this.role == "seller") {
        for (var _i2 = 0; _i2 < tabUniqueAd.length; _i2++) {
          //   pour chaque ad
          var tabBuyerAd = [];
          var messagEchantillon = {};

          for (var j = 0; j < messages.length; j++) {
            if (messages[j]['ad'].id == tabUniqueAd[_i2]) {
              var notFind = true;

              for (var k = 0; k < tabBuyerAd.length; k++) {
                if (messages[j].buyer_id == tabBuyerAd[k].id) {
                  notFind = false;
                  break;
                }
              } // Fin  tabBuyerAd  k


              if (notFind) {
                tabBuyerAd.push(messages[j]["buyer"]);
              }

              messagEchantillon = messages[j]['ad'];
            } // fin if messages

          } // fin for messages j


          var key = tabUniqueAd[_i2];
          _this.messagesMap[key] = {
            "tabAd": tabBuyerAd,
            "ad": messagEchantillon
          };
        } // fin for tabUniqueAd  i
        // getting all the keys of the map


        _this.get_keys = Object.keys(_this.messagesMap);
      }

      console.log(_this.messagesMap);
      return response;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Messages.vue?vue&type=template&id=77f4a440&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages/Messages.vue?vue&type=template&id=77f4a440& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container ad message my-5 px-5 py-5" }, [
    _c("h1", { staticClass: "pb-5 m-5" }, [_vm._v("Mes messages")]),
    _vm._v(" "),
    _vm.role === "buyer"
      ? _c(
          "div",
          _vm._l(_vm.get_keys, function(get_key) {
            return _c(
              "div",
              {
                key: get_key,
                staticClass:
                  "row offset-1 col-10 offset-1 data-row px-3 py-4 m-5"
              },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "conversation",
                        params: {
                          adId: _vm.messagesMap[get_key][0]["ad"]["id"]
                        }
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "row text-dark" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 text-left font-weight-bold  mx-3 mb-2"
                        },
                        [
                          _c("span", { staticClass: "px-2 " }, [
                            _vm._v(
                              _vm._s(_vm.messagesMap[get_key][0]["ad"]["title"])
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 text-left mx-3 px-2 mb-2" },
                        [
                          _c("span", { staticClass: "px-2  " }, [
                            _vm._v(
                              _vm._s(_vm.messagesMap[get_key][0]["message"])
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
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.role === "seller"
      ? _c(
          "div",
          _vm._l(_vm.get_keys, function(get_key) {
            return _c(
              "div",
              {
                key: get_key,
                staticClass:
                  "row offset-1 col-10 offset-1 data-row px-3 py-4 m-5"
              },
              [
                _c(
                  "div",
                  { staticClass: "row text-dark" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 text-left font-weight-bold  mx-3 mb-2"
                      },
                      [
                        _c("span", { staticClass: "px-2 " }, [
                          _vm._v(
                            _vm._s(_vm.messagesMap[get_key]["ad"]["title"])
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.messagesMap[get_key]["tabAd"], function(user) {
                      return _c(
                        "div",
                        { key: user.id },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "conversation",
                                  params: {
                                    adId: _vm.messagesMap[get_key]["ad"]["id"],
                                    buyerId: user.id
                                  }
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "row offset-2 col-8 offset-2 data-row px-3 py-4 m-5"
                                },
                                [
                                  _c("div", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          " row col-12 text-left mx-3 px-2 mb-2"
                                      },
                                      [
                                        _c("span", { staticClass: "px-2  " }, [
                                          _vm._v(
                                            _vm._s(user.first_name) +
                                              " " +
                                              _vm._s(user.last_name)
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              ]
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Messages/Messages.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Messages/Messages.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Messages_vue_vue_type_template_id_77f4a440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=77f4a440& */ "./resources/js/views/Messages/Messages.vue?vue&type=template&id=77f4a440&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/js/views/Messages/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_77f4a440___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Messages_vue_vue_type_template_id_77f4a440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Messages/Messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Messages/Messages.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Messages/Messages.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Messages/Messages.vue?vue&type=template&id=77f4a440&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Messages/Messages.vue?vue&type=template&id=77f4a440& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_77f4a440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=template&id=77f4a440& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Messages.vue?vue&type=template&id=77f4a440&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_77f4a440___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_77f4a440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);