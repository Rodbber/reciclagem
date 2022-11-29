"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Nova_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Nova.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Nova.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    id: {
      "default": null
    }
  },
  data: function data() {
    return {
      message: "",
      snackbar: false,
      timeout: 5000,
      loading: false,
      form: {},
      rules: {
        estado: [function (val) {
          return (val || "").length > 0 || "Required";
        }]
      },
      estados: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
    };
  },
  watch: {
    id: function id(n) {
      if (n) {
        this.id = n;
        this.show();
      }
    }
  },
  methods: {
    show: function show() {
      var _this = this;
      if (this.id) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get("/coleta/" + this.id).then(function (r) {
          if (r.data) {
            _this.form = r.data;
          }
        })["catch"](function (e) {
          return console.log(e);
        });
      }
    },
    salvar: function salvar() {
      var _this2 = this;
      this.loading = true;
      var method = "POST";
      var url = "/coleta/salvar";
      if (this.id) {
        method = "PATCH";
        url = "/coleta/editar/" + this.id;
      }
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: method,
        url: url,
        data: this.form
      }).then(function (r) {
        _this2.snackbar = true;
        _this2.message = "Sucesso!";
        _this2.loading = false;
        if (r.data) {
          console.log(r.data);
        }
        if (!_this2.id) {
          _this2.form = {};
        }
      })["catch"](function (e) {
        _this2.snackbar = true;
        _this2.message = "Error!<br/>";
        var messageErros = "";
        console.log(e);
        if (e.response && e.response.status == 422) {
          for (var i in e.response.data.errors) {
            messageErros += e.response.data.errors[i][0] + "<br/>";
          }
        }
        _this2.message += messageErros;
        _this2.loading = false;
      });
    },
    cep: function cep(value) {
      var _this3 = this;
      if (value.length == 8) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://viacep.com.br/ws/".concat(value, "/json/")).then(function (r) {
          if (r.data) {
            _this3.form.uf = r.data.uf;
            _this3.form.cidade = r.data.localidade;
            _this3.form.bairro = r.data.bairro;
            _this3.form.rua = r.data.logradouro;
          }
        })["catch"](function (e) {
          return console.log("erro api do cep");
        });
      }
    }
  },
  mounted: function mounted() {
    this.show();
  }
});

/***/ }),

/***/ "./resources/js/views/Nova.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Nova.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nova_vue_vue_type_template_id_4c8399cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nova.vue?vue&type=template&id=4c8399cb& */ "./resources/js/views/Nova.vue?vue&type=template&id=4c8399cb&");
/* harmony import */ var _Nova_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nova.vue?vue&type=script&lang=js& */ "./resources/js/views/Nova.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Nova_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nova_vue_vue_type_template_id_4c8399cb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Nova_vue_vue_type_template_id_4c8399cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Nova.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Nova.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Nova.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nova_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nova.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Nova.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nova_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Nova.vue?vue&type=template&id=4c8399cb&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Nova.vue?vue&type=template&id=4c8399cb& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nova_vue_vue_type_template_id_4c8399cb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nova_vue_vue_type_template_id_4c8399cb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nova_vue_vue_type_template_id_4c8399cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nova.vue?vue&type=template&id=4c8399cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Nova.vue?vue&type=template&id=4c8399cb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Nova.vue?vue&type=template&id=4c8399cb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Nova.vue?vue&type=template&id=4c8399cb& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { staticClass: "max-w-full py-5 px-10" },
    [
      _c(
        "router-link",
        {
          staticClass: "pl-2 mt-2",
          attrs: { slot: "right", to: !_vm.id ? "/home" : "/lista" },
          slot: "right",
        },
        [
          _c("v-icon", { attrs: { color: "black" } }, [
            _vm._v(" mdi-arrow-left "),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "overflow-y-auto overflow-x-hidden max-h-max w-full" },
        [
          _c(
            "div",
            { staticClass: "flex flex-col items-center pt-5 space-y-5" },
            [
              _c("v-row", { staticClass: "justify-start" }, [
                _c("label", { attrs: { for: "dataColeta" } }, [
                  _vm._v("data e hora da coleta:"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "border p-2 rounded-lg" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.data_hora,
                      expression: "form.data_hora",
                    },
                  ],
                  attrs: { id: "dataColeta", type: "datetime-local" },
                  domProps: { value: _vm.form.data_hora },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "data_hora", $event.target.value)
                    },
                  },
                }),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col" }, [
            _c(
              "div",
              { staticClass: "flex flex-col w-full md:flex-row md:space-x-5" },
              [
                _c("v-text-field", {
                  attrs: {
                    counter: "",
                    maxlength: "8",
                    hint: "Digite o cep e talvez a API encontre",
                    label: "CEP",
                  },
                  on: { input: _vm.cep },
                  model: {
                    value: _vm.form.cep,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "cep", $$v)
                    },
                    expression: "form.cep",
                  },
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    counter: "",
                    maxlength: "20",
                    hint: "Digite o numero do endereço",
                    label: "Numero",
                  },
                  model: {
                    value: _vm.form.numero,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "numero", $$v)
                    },
                    expression: "form.numero",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-col w-full md:flex-row md:space-x-5" },
              [
                _c("v-text-field", {
                  attrs: {
                    counter: "",
                    maxlength: "255",
                    hint: "Digite o cep e talvez a API encontre",
                    label: "Rua",
                  },
                  model: {
                    value: _vm.form.rua,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "rua", $$v)
                    },
                    expression: "form.rua",
                  },
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    counter: "",
                    maxlength: "100",
                    hint: "Digite o numero do endereço",
                    label: "Bairro",
                  },
                  model: {
                    value: _vm.form.bairro,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "bairro", $$v)
                    },
                    expression: "form.bairro",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex flex-col w-full md:flex-row md:space-x-5" },
              [
                _c("v-text-field", {
                  attrs: {
                    counter: "",
                    maxlength: "8",
                    hint: "Digite o cep e talvez a API encontre",
                    label: "Cidade",
                  },
                  model: {
                    value: _vm.form.cidade,
                    callback: function ($$v) {
                      _vm.$set(_vm.form, "cidade", $$v)
                    },
                    expression: "form.cidade",
                  },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "md:w-[49%]" },
                  [
                    _c("v-select", {
                      attrs: {
                        items: _vm.estados,
                        rules: _vm.rules.estado,
                        label: "Estado",
                        required: "",
                      },
                      model: {
                        value: _vm.form.uf,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "uf", $$v)
                        },
                        expression: "form.uf",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c("v-textarea", {
                attrs: {
                  clearable: "",
                  "clear-icon": "mdi-close-circle",
                  label: "Descrição",
                  placeholder: "Digite aqui os detalhes para coleta.",
                  rows: "3",
                  counter: "",
                  maxlength: "300",
                },
                model: {
                  value: _vm.form.descricao,
                  callback: function ($$v) {
                    _vm.$set(_vm.form, "descricao", $$v)
                  },
                  expression: "form.descricao",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-end" },
            [
              _c(
                "v-btn",
                {
                  staticClass: "w-full md:w-auto",
                  attrs: {
                    loading: _vm.loading,
                    color: "blue",
                    elevation: "2",
                  },
                  on: { click: _vm.salvar },
                },
                [
                  _vm._v("\n        Salvar\n        "),
                  _c("v-icon", { staticClass: "text-white" }, [
                    _vm._v(" mdi-content-save "),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: {
                timeout: _vm.timeout,
                top: "",
                color: _vm.message == "Sucesso!" ? "success" : "error",
              },
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function (ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "blue", text: "" },
                            on: {
                              click: function ($event) {
                                _vm.snackbar = false
                              },
                            },
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [_vm._v("\n          Close\n        ")]
                      ),
                    ]
                  },
                },
              ]),
              model: {
                value: _vm.snackbar,
                callback: function ($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar",
              },
            },
            [_c("span", { domProps: { innerHTML: _vm._s(_vm.message) } })]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);