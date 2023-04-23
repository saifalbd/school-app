"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_view_people_customer_customerlist_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/people/customer/customerlist.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/people/customer/customerlist.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var columns = [{
  sorter: true
}, {
  title: "Customer Name",
  dataIndex: "fname",
  key: "img",
  sorter: {
    compare: function compare(a, b) {
      a = a.fname.toLowerCase();
      b = b.fname.toLowerCase();
      return a > b ? -1 : b > a ? 1 : 0;
    }
  }
}, {
  title: "code",
  dataIndex: "code",
  sorter: function sorter(a, b) {
    return a.code.localeCompare(b.code);
  }
}, {
  title: "Customer",
  dataIndex: "custemer",
  sorter: {
    compare: function compare(a, b) {
      a = a.custemer.toLowerCase();
      b = b.custemer.toLowerCase();
      return a > b ? -1 : b > a ? 1 : 0;
    }
  }
}, {
  title: "Phone",
  dataIndex: "phone",
  sorter: {
    compare: function compare(a, b) {
      a = a.phone.toLowerCase();
      b = b.phone.toLowerCase();
      return a > b ? -1 : b > a ? 1 : 0;
    }
  }
}, {
  title: "email",
  dataIndex: "email",
  sorter: {
    compare: function compare(a, b) {
      a = a.email.toLowerCase();
      b = b.email.toLowerCase();
      return a > b ? -1 : b > a ? 1 : 0;
    }
  }
}, {
  title: "Country",
  dataIndex: "country",
  sorter: {
    compare: function compare(a, b) {
      a = a.country.toLowerCase();
      b = b.country.toLowerCase();
      return a > b ? -1 : b > a ? 1 : 0;
    }
  }
}, {
  title: "Action",
  key: "action",
  sorter: true
}];
var _data = [{
  id: 1,
  img: "customer1.jpg",
  fname: "Thomas",
  code: "201",
  custemer: "Thomas",
  phone: "+12163547758",
  email: "thomas@example.com",
  country: "USA"
}, {
  id: 2,
  img: "customer2.jpg",
  fname: "Benjamin",
  code: "202",
  custemer: "504Benjamin",
  phone: "123-456-888",
  email: "customer@example.com",
  country: "USA"
}, {
  id: 3,
  img: "customer3.jpg",
  fname: "James",
  code: "521",
  custemer: "James 524",
  phone: "+12163547758",
  email: "james@example.com",
  country: "USA"
}, {
  id: 4,
  img: "customer4.jpg",
  fname: "Bruklin",
  code: "555",
  custemer: "Bruklin2022",
  phone: "123-456-8888",
  email: "bruklin@example.com",
  country: "Thailand"
}, {
  id: 5,
  img: "customer5.jpg",
  fname: "Franklin",
  code: "325",
  custemer: "BeverlyWIN25",
  phone: "+12163547758",
  email: "Beverly@example.com",
  country: "Phuket island"
}, {
  id: 6,
  img: "customer6.jpg",
  fname: "B. Huber",
  code: "589",
  custemer: "BeverlyWIN25",
  phone: "+12163547758",
  email: "Huber@example.com",
  country: "Germany"
}, {
  id: 7,
  img: "customer7.jpg",
  fname: "Alwin",
  code: "254",
  custemer: "Alwin243",
  phone: "+12163547758",
  email: "customer@example.com",
  country: "Angola"
}, {
  id: 8,
  img: "customer8.jpg",
  fname: "Fred john",
  code: "681",
  custemer: "FredJ25",
  phone: "+12163547758",
  email: "john@example.com",
  country: "Albania"
}, {
  id: 9,
  img: "customer1.jpg",
  fname: "Rasmussen",
  code: "589",
  custemer: "FredJ25",
  phone: "+12163547758",
  email: "Rasmussen@example.com",
  country: "Germany"
}, {
  id: 10,
  img: "customer1.jpg",
  fname: "Rasmussen",
  code: "254",
  custemer: "FredJ25",
  phone: "+12163547758",
  email: "Rasmussen@example.com",
  country: "Angola"
}, {
  id: 11,
  img: "customer2.jpg",
  fname: "Grace",
  code: "681",
  custemer: "Grace2022",
  phone: "+12163547758",
  email: "customer@example.com",
  country: "Albania"
}, {
  id: 12,
  img: "customer3.jpg",
  fname: "Rasmussen",
  code: "589",
  custemer: "Cras56",
  phone: "+12163547758",
  email: "Rasmussen@example.com",
  country: "Germany"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      filter: false,
      title: "Sales List",
      title1: "Manage your sales",
      items: [{
        text: "Add Sales",
        addname: "/add-sales"
      }],
      data: _data,
      columns: columns
    };
  },
  methods: {
    showAlert: function showAlert() {
      // Use sweetalert2
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#FF9F43",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your file has been deleted.");
        }
      });
    }
  },
  name: "customerlist"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/people/customer/customerlist.vue?vue&type=template&id=0e5b8c60":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/people/customer/customerlist.vue?vue&type=template&id=0e5b8c60 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "content"
};
var _hoisted_2 = {
  "class": "card"
};
var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "table-top"
};
var _hoisted_5 = {
  "class": "search-set"
};
var _hoisted_6 = {
  "class": "search-path"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/icons/filter.svg",
  alt: "img"
}, null, -1 /* HOISTED */);
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/icons/closes.svg",
  alt: "img"
})], -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_7, _hoisted_8];
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"search-input\"><a class=\"btn btn-searchset\"><img src=\"/assets/img/icons/search-white.svg\" alt=\"img\"></a><div id=\"DataTables_Table_0_filter\" class=\"dataTables_filter\"><label><input type=\"search\" class=\"form-control form-control-sm\" placeholder=\"Search...\" aria-controls=\"DataTables_Table_0\"></label></div></div>", 1);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"wordset\"><ul><li><a data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" title=\"pdf\"><img src=\"/assets/img/icons/pdf.svg\" alt=\"img\"></a></li><li><a data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" title=\"excel\"><img src=\"/assets/img/icons/excel.svg\" alt=\"img\"></a></li><li><a data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" title=\"print\"><img src=\"/assets/img/icons/printer.svg\" alt=\"img\"></a></li></ul></div>", 1);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card-body pb-0\"><div class=\"row\"><div class=\"col-lg-2 col-sm-6 col-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Enter Customer Code\"></div></div><div class=\"col-lg-2 col-sm-6 col-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Enter Customer Name\"></div></div><div class=\"col-lg-2 col-sm-6 col-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Enter Phone Number\"></div></div><div class=\"col-lg-2 col-sm-6 col-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Enter Email\"></div></div><div class=\"col-lg-1 col-sm-6 col-12 ms-auto\"><div class=\"form-group\"><a class=\"btn btn-filters ms-auto\"><img src=\"/assets/img/icons/search-whites.svg\" alt=\"img\"></a></div></div></div></div>", 1);
var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = {
  "class": "table-responsive"
};
var _hoisted_15 = {
  key: 0,
  "class": "productimgname"
};
var _hoisted_16 = {
  href: "javascript:void(0);",
  "class": "product-img"
};
var _hoisted_17 = ["src"];
var _hoisted_18 = {
  href: "javascript:void(0);"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/icons/edit.svg",
  alt: "img"
}, null, -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/icons/delete.svg",
  alt: "img"
}, null, -1 /* HOISTED */);
var _hoisted_21 = [_hoisted_20];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_a_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-table");
  var _component_custemerlistmodal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("custemerlistmodal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main Wrapper "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <pageaddheader :title=\"title\" :title1=\"title1\" :items=\"items\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /product list "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-filter", {
      setclose: $data.filter
    }]),
    id: "filter_search",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.filter = !$data.filter;
    })
  }, _hoisted_9, 2 /* CLASS */)]), _hoisted_10]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /Filter "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "card",
    id: "filter_inputs",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      display: $data.filter ? 'block' : 'none'
    })
  }, _hoisted_13, 4 /* STYLE */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /Filter "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_table, {
    columns: $data.columns,
    "data-source": $data.data,
    "row-selection": {
      selectedRowKeys: _ctx.selectedRowKeys,
      onChange: _ctx.onSelectChange
    },
    onChange: _ctx.onChange
  }, {
    bodyCell: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var column = _ref.column,
        record = _ref.record;
      return [column.key === 'img' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '/assets/img/customer/' + record.img,
        alt: "product"
      }, null, 8 /* PROPS */, _hoisted_17)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(record.fname), 1 /* TEXT */)])) : column.key === 'action' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        "class": "me-3",
        to: "editcustomer"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_19];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        "class": "me-3 confirm-text",
        href: "javascript:void(0);",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.showAlert && $options.showAlert.apply($options, arguments);
        })
      }, _hoisted_21)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["columns", "data-source", "row-selection", "onChange"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /product list "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_custemerlistmodal)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./vue/view/people/customer/customerlist.vue":
/*!***************************************************!*\
  !*** ./vue/view/people/customer/customerlist.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customerlist_vue_vue_type_template_id_0e5b8c60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customerlist.vue?vue&type=template&id=0e5b8c60 */ "./vue/view/people/customer/customerlist.vue?vue&type=template&id=0e5b8c60");
/* harmony import */ var _customerlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerlist.vue?vue&type=script&lang=js */ "./vue/view/people/customer/customerlist.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_pos_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_pos_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_customerlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_customerlist_vue_vue_type_template_id_0e5b8c60__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vue/view/people/customer/customerlist.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vue/view/people/customer/customerlist.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./vue/view/people/customer/customerlist.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customerlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customerlist_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./customerlist.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/people/customer/customerlist.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vue/view/people/customer/customerlist.vue?vue&type=template&id=0e5b8c60":
/*!*********************************************************************************!*\
  !*** ./vue/view/people/customer/customerlist.vue?vue&type=template&id=0e5b8c60 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customerlist_vue_vue_type_template_id_0e5b8c60__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_customerlist_vue_vue_type_template_id_0e5b8c60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./customerlist.vue?vue&type=template&id=0e5b8c60 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/people/customer/customerlist.vue?vue&type=template&id=0e5b8c60");


/***/ })

}]);