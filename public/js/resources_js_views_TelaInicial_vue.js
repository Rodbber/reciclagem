"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_TelaInicial_vue"],{

/***/ "./resources/js/views/TelaInicial.vue":
/*!********************************************!*\
  !*** ./resources/js/views/TelaInicial.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TelaInicial_vue_vue_type_template_id_7c9c0ac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TelaInicial.vue?vue&type=template&id=7c9c0ac0& */ "./resources/js/views/TelaInicial.vue?vue&type=template&id=7c9c0ac0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _TelaInicial_vue_vue_type_template_id_7c9c0ac0___WEBPACK_IMPORTED_MODULE_0__.render,
  _TelaInicial_vue_vue_type_template_id_7c9c0ac0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TelaInicial.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/TelaInicial.vue?vue&type=template&id=7c9c0ac0&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/TelaInicial.vue?vue&type=template&id=7c9c0ac0& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TelaInicial_vue_vue_type_template_id_7c9c0ac0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TelaInicial_vue_vue_type_template_id_7c9c0ac0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TelaInicial_vue_vue_type_template_id_7c9c0ac0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TelaInicial.vue?vue&type=template&id=7c9c0ac0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TelaInicial.vue?vue&type=template&id=7c9c0ac0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TelaInicial.vue?vue&type=template&id=7c9c0ac0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/TelaInicial.vue?vue&type=template&id=7c9c0ac0& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-10" }, [
    _c("h1", { staticClass: "text-2xl" }, [_vm._v("Formas de uso:")]),
    _vm._v(" "),
    _c("div", [
      _c("ul", [
        _c("li", [
          _vm._v(
            '\n        Clique no botão "Listar de coletas" para ver todas coletas registradas\n      '
          ),
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            '\n        Na tela principal clique no botão "Nova coleta", para registrar uma\n        nova coleta\n      '
          ),
        ]),
        _vm._v(" "),
        _c(
          "li",
          [
            _vm._v('\n        Em "Listar de coletas", clicando em\n        '),
            _c("v-icon", { staticClass: "mr-2", attrs: { small: "" } }, [
              _vm._v(" mdi-pencil "),
            ]),
            _vm._v(", você pode editar uma\n        coleta registrada\n      "),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _vm._v('\n        Em "Listar de coletas", clicando em '),
            _c("v-icon", { attrs: { small: "" } }, [_vm._v(" mdi-delete ")]),
            _vm._v(
              ",\n        você pode cancelar uma coleta registrada\n      "
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _vm._v('\n        Em "Listar de coletas", clicando em '),
            _c("v-icon", { attrs: { small: "" } }, [_vm._v(" mdi-delete ")]),
            _vm._v(
              ",\n        quando cancelada, você pode apagar uma coleta cancelada\n      "
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _vm._v('\n        Em "Listar de coletas", clicando em\n        '),
            _c("v-icon", { attrs: { small: "" } }, [
              _vm._v(" mdi-check-bold "),
            ]),
            _vm._v(
              ", você pode confirmar uma\n        coleta registrada\n      "
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          [
            _vm._v("\n        Clicando em "),
            _c("v-icon", [_vm._v("mdi-export")]),
            _vm._v(", você pode sair da aplicação\n      "),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-end" },
        [
          _c(
            "router-link",
            {
              staticClass: "pl-2 mt-2",
              attrs: { slot: "right", to: "/home" },
              slot: "right",
            },
            [
              _vm._v("\n        Continuar\n        "),
              _c("v-icon", [_vm._v(" mdi-play ")]),
            ],
            1
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);