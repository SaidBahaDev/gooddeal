(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages/Conversation.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['adId', 'buyerId'],
  data: function data() {
    return {
      ad: {},
      title: '',
      buyerName: '',
      messagesMap: [],
      errors: {},
      sender_id: 0,
      mySendedMessage: '',
      receivedMessage: ''
    };
  },
  methods: {
    getAd: function getAd() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/ads/".concat(this.adId)).then(function (response) {
        _this.ad = response.data;
        _this.title = _this.ad.title; // this.buyerName = this.messagesMap[0]['buyer']['first_name']+" "+this.messagesMap[0]['buyer']['last_name'];
      })["catch"](function (e) {
        _this.errors.push(e);
      });
    },
    envoiMessage: function envoiMessage() {
      var _this2 = this;

      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().post('/api/messages/', {
        'message': this.mySendedMessage,
        'ad_id': this.adId,
        'buyer_id': this.buyerId
      }).then(function (response) {
        _this2.errors = {};
        _this2.receivedMessage = response.data;

        _this2.messagesMap.push(_this2.receivedMessage);

        _this2.mySendedMessage = '';
      })["catch"](function (error) {
        _this2.errors = error.response.data.error;
      });
    } //  Fin afficherMessages(lesMessages)

  },
  created: function created() {
    var _this3 = this;

    var gd = JSON.parse(localStorage.getItem('gooddeal-token'));

    if (gd) {
      this.sender_id = gd.user.id;
      this.role = gd.user.role;
    }

    var address = '/api/messages/';

    if (this.role == "seller") {
      address = '/api/messages/' + this.buyerId;
    }

    Object(_services_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().get(address).then(function (response) {
      var messages = response.data; // map qui contient les messages selon Ad

      _this3.messagesMap = []; // chercher les messages pour chaque Ad et pour chaque buyer

      _this3.messagesMap = messages.filter(function (message) {
        return message.ad_id == _this3.adId;
      });

      if (_this3.messagesMap[0]) {
        _this3.title = _this3.messagesMap[0]['ad']['title'];
        _this3.buyerName = _this3.messagesMap[0]['buyer']['first_name'] + " " + _this3.messagesMap[0]['buyer']['last_name'];
        _this3.buyerId = _this3.messagesMap[0].buyer_id;
      } else {
        _this3.getAd();
      }

      return response;
    });
  },
  updated: function updated() {
    var container = this.$el.querySelector("#container");
    container.scrollTop = container.scrollHeight;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages {\n  background: url(" + escape(__webpack_require__(/*! ./images/paper.png */ "./resources/js/views/Messages/images/paper.png")) + ");\n  background-position: left top;\n  background-repeat: repeat;\n  border-radius: 5px;\n  padding: 1em;\n  height: 50vh;\n  overflow: auto;\n}\n.messageNormal {\n  background-color: white;\n  color: black;\n  padding: 0.3em;\n  display: flex;\n  flex-direction: column;\n  margin: 2em;\n  margin-right: auto;\n  border-radius: 0.2em 1em 1em 1em;\n  width: 40%;\n}\n.messageColor {\n  background-color: #BEFFD6;\n  color: black;\n  padding: 0.3em;\n  display: flex;\n  flex-direction: column;\n  margin: 2em;\n  border-radius: 1em 0.2em 1em 1em;\n  margin-left: auto;\n  width: 60%;\n}\n.date_message {\n  font-size: x-small;\n  color: gray;\n  text-align: right;\n  margin-right: 1em;\n}\n.text_message {\n  margin-left: 1.5em;\n}\nform {\n  display: flex;\n  margin-top: 1em;\n  justify-content: space-between;\n}\ninput {\n  padding: 0.5em;\n  margin-right: 10px;\n}\n.mon_text_message {\n  width: 100%;\n}\n.nick_name {\n  color: #c4b8f9;\n}\n.DivToScroll {\n  background-color: #F5F5F5;\n  border: 1px solid #DDDDDD;\n  border-radius: 4px 0 4px 0;\n  color: #3B3C3E;\n  font-size: 12px;\n  font-weight: bold;\n  left: -1px;\n  padding: 10px 7px 5px;\n}\n.DivWithScroll {\n  height: 60vh;\n  overflow: scroll;\n  overflow-x: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=template&id=c0b70412&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Messages/Conversation.vue?vue&type=template&id=c0b70412& ***!
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
  return _c("div", { staticClass: " container ad p-5  h-50 message1 " }, [
    _c("h2", { staticClass: "p-5" }, [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c("h5", { staticClass: "nick_name" }, [_vm._v(_vm._s(_vm.buyerName))]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "DivToScroll DivWithScroll chat",
        attrs: { id: "container" }
      },
      _vm._l(_vm.messagesMap, function(message) {
        return _c(
          "div",
          {
            key: message.id,
            class: {
              messageColor: message.sender_id == _vm.sender_id,
              messageNormal: message.sender_id != _vm.sender_id
            }
          },
          [
            message.sender_id != _vm.sender_id
              ? _c("span", { staticClass: "nick_name text_message" }, [
                  _vm._v(_vm._s(_vm.buyerName))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "text_message" }, [
              _vm._v(_vm._s(message.message))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "date_message" }, [
              _vm._v(_vm._s(message.created_at.substring(11, 16)))
            ])
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "user-inputs" }, [
      _c("form", { attrs: { action: "" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mySendedMessage,
              expression: "mySendedMessage"
            }
          ],
          staticClass: "mon_text_message",
          attrs: {
            type: "text",
            name: "text_message",
            placeholder: "Votre message !"
          },
          domProps: { value: _vm.mySendedMessage },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.mySendedMessage = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "col-3 btn btn-primary btn-block text-uppercase",
          attrs: { type: "button", value: "Envoyer" },
          on: { click: _vm.envoiMessage }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Messages/Conversation.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Messages/Conversation.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Conversation_vue_vue_type_template_id_c0b70412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conversation.vue?vue&type=template&id=c0b70412& */ "./resources/js/views/Messages/Conversation.vue?vue&type=template&id=c0b70412&");
/* harmony import */ var _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation.vue?vue&type=script&lang=js& */ "./resources/js/views/Messages/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Conversation.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conversation_vue_vue_type_template_id_c0b70412___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Conversation_vue_vue_type_template_id_c0b70412___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Messages/Conversation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Messages/Conversation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Messages/Conversation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Messages/Conversation.vue?vue&type=template&id=c0b70412&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Messages/Conversation.vue?vue&type=template&id=c0b70412& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_c0b70412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=template&id=c0b70412& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Messages/Conversation.vue?vue&type=template&id=c0b70412&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_c0b70412___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_c0b70412___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Messages/images/paper.png":
/*!******************************************************!*\
  !*** ./resources/js/views/Messages/images/paper.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/paper.png?6317e1bd268e1d0ed90d2cafcbfc3af7";

/***/ })

}]);