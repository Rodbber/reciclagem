"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Lista_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TabelaColetas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TabelaColetas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: false,
      headers: [{
        text: "Data",
        align: "start",
        value: "data_hora"
      }, {
        text: "Descrição",
        value: "descricao"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Ações",
        value: "actions"
      }],
      coletas: []
    };
  },
  methods: {
    formatDate: function formatDate(value) {
      return new Date(value).toLocaleString("pt-BR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
    },
    status: function status(item) {
      if (item.deleted_at) {
        return {
          status: "Cancelada",
          cor: "red"
        };
      }
      switch (item.status) {
        case 0:
          return {
            status: "Aguardando coleta",
            cor: "yellow"
          };
        case 1:
          return {
            status: "Concluida",
            cor: "success"
          };
      }
    },
    confirmarColeta: function confirmarColeta(item) {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().patch("/coleta/confirmar/" + item.id).then(function (r) {
        _this.getData();
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    // editItem(item) {
    //     this.$route.push({name:'editar_coleta', props:{id:item.id}})
    // },
    deleteItem: function deleteItem(item) {
      var _this2 = this;
      if (!item.deleted_at) {
        axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/coleta/" + item.id).then(function (r) {
          _this2.getData();
        })["catch"](function (e) {
          return console.log(e);
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/coleta/force/" + item.id).then(function (r) {
          _this2.getData();
        })["catch"](function (e) {
          return console.log(e);
        });
      }
    },
    getData: function getData() {
      var _this3 = this;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/coleta/all").then(function (r) {
        if (r.data) {
          _this3.coletas = r.data;
        }
        _this3.loading = false;
      })["catch"](function (e) {
        _this3.loading = false;
        console.log(e);
      });
    }
  },
  mounted: function mounted() {
    this.getData();
    /* setTimeout(() => {
        this.desserts = [
         ]
        this.loading = false
    }, 5000); */
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TabelaColetas_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TabelaColetas.vue */ "./resources/js/components/TabelaColetas.vue");
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TabelaColetas: _components_TabelaColetas_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/components/TabelaColetas.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/TabelaColetas.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TabelaColetas_vue_vue_type_template_id_12bb3fa1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabelaColetas.vue?vue&type=template&id=12bb3fa1& */ "./resources/js/components/TabelaColetas.vue?vue&type=template&id=12bb3fa1&");
/* harmony import */ var _TabelaColetas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabelaColetas.vue?vue&type=script&lang=js& */ "./resources/js/components/TabelaColetas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabelaColetas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabelaColetas_vue_vue_type_template_id_12bb3fa1___WEBPACK_IMPORTED_MODULE_0__.render,
  _TabelaColetas_vue_vue_type_template_id_12bb3fa1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TabelaColetas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Lista.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Lista.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lista.vue?vue&type=template&id=30871074& */ "./resources/js/views/Lista.vue?vue&type=template&id=30871074&");
/* harmony import */ var _Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lista.vue?vue&type=script&lang=js& */ "./resources/js/views/Lista.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.render,
  _Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Lista.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TabelaColetas.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TabelaColetas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaColetas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabelaColetas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TabelaColetas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaColetas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Lista.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Lista.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lista.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TabelaColetas.vue?vue&type=template&id=12bb3fa1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/TabelaColetas.vue?vue&type=template&id=12bb3fa1& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaColetas_vue_vue_type_template_id_12bb3fa1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaColetas_vue_vue_type_template_id_12bb3fa1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaColetas_vue_vue_type_template_id_12bb3fa1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabelaColetas.vue?vue&type=template&id=12bb3fa1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TabelaColetas.vue?vue&type=template&id=12bb3fa1&");


/***/ }),

/***/ "./resources/js/views/Lista.vue?vue&type=template&id=30871074&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Lista.vue?vue&type=template&id=30871074& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lista.vue?vue&type=template&id=30871074& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=template&id=30871074&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TabelaColetas.vue?vue&type=template&id=12bb3fa1&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TabelaColetas.vue?vue&type=template&id=12bb3fa1& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "px-10 mt-10" },
    [
      _c(
        "v-data-table",
        {
          staticClass: "elevation-1",
          attrs: {
            headers: _vm.headers,
            items: _vm.coletas,
            "items-per-page": 10,
            loading: _vm.loading,
            "loading-text": "Carregando...",
          },
          scopedSlots: _vm._u([
            {
              key: "item.data_hora",
              fn: function (ref) {
                var item = ref.item
                return [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.formatDate(item.data_hora)) +
                      "\n    "
                  ),
                ]
              },
            },
            {
              key: "item.descricao",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c(
                    "div",
                    { staticClass: "break-all w-56 h-14 overflow-y-auto" },
                    [
                      _vm._v(
                        "\n          " + _vm._s(item.descricao) + "\n      "
                      ),
                    ]
                  ),
                ]
              },
            },
            {
              key: "item.status",
              fn: function (ref) {
                var item = ref.item
                return [
                  _c("v-chip", { attrs: { color: _vm.status(item).cor } }, [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.status(item).status) +
                        "\n      "
                    ),
                  ]),
                ]
              },
            },
            {
              key: "item.actions",
              fn: function (ref) {
                var item = ref.item
                return [
                  item.status !== 1 && !item.deleted_at
                    ? _c(
                        "v-icon",
                        {
                          staticClass: "mr-2",
                          attrs: { small: "" },
                          on: {
                            click: function ($event) {
                              return _vm.confirmarColeta(item)
                            },
                          },
                        },
                        [_vm._v(" mdi-check-bold ")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.status !== 1 && !item.deleted_at
                    ? _c(
                        "router-link",
                        {
                          staticClass: "button is-small is-primary",
                          attrs: {
                            to: {
                              name: "editar_coleta",
                              params: { id: item.id },
                            },
                          },
                        },
                        [
                          _c(
                            "v-icon",
                            { staticClass: "mr-2", attrs: { small: "" } },
                            [_vm._v(" mdi-pencil ")]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.status !== 1
                    ? _c(
                        "v-icon",
                        {
                          attrs: { small: "" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteItem(item)
                            },
                          },
                        },
                        [_vm._v(" mdi-delete ")]
                      )
                    : _vm._e(),
                ]
              },
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm._v(" "),
          _vm._v(" "),
          _vm._v(" "),
          _vm._v(" "),
          _c("template", { slot: "no-data" }, [
            _c(
              "div",
              [
                _vm._v("Sem dados para mostrar. "),
                _c("v-icon", [_vm._v("mdi-emoticon-sad")]),
              ],
              1
            ),
          ]),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=template&id=30871074&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=template&id=30871074& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "router-link",
        {
          staticClass: "pl-10",
          attrs: { slot: "right", to: "/home" },
          slot: "right",
        },
        [
          _c("v-icon", { staticClass: "mt-10", attrs: { color: "black" } }, [
            _vm._v(" mdi-arrow-left "),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", [_c("TabelaColetas")], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);