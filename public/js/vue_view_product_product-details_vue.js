"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vue_view_product_product-details_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/components/pageheader/pageheader.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/components/pageheader/pageheader.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    title: {
      type: String,
      "default": ""
    },
    title1: {
      type: String,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/product/product-details.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/product/product-details.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_pageheader_pageheader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pageheader/pageheader.vue */ "./vue/components/pageheader/pageheader.vue");
/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel/dist/carousel.css */ "./node_modules/vue3-carousel/dist/carousel.css");
/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-carousel */ "./node_modules/vue3-carousel/dist/carousel.es.js");
/* harmony import */ var _assets_json_productdetails_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/json/productdetails.json */ "./vue/assets/json/productdetails.json");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PageHeader: _components_pageheader_pageheader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel,
    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_2__.Slide,
    Navigation: vue3_carousel__WEBPACK_IMPORTED_MODULE_2__.Navigation
  },
  name: "product-details",
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  setup: function setup(props) {
    var _ref2;
    var busy = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(true);
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)('');
    var category = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
    var subCategory = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
    var brand = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)('');
    var unit = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(1);
    var sku = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)('');
    var minQty = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
    var qty = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
    var description = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)('');
    var tax = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
    var discountType = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)('percentage');
    var discountValue = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(10);
    var price = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
    var status = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(0);
    var avatar = (0,vue__WEBPACK_IMPORTED_MODULE_4__.ref)(null);
    var show = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              busy.value = true;
              _context.prev = 1;
              url = route('api.product.show', {
                product: props.id
              });
              _context.next = 5;
              return axios.get(url);
            case 5:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              name.value = data.name;
              category.value = data.category.name;
              subCategory.value = data.subCategory.name;
              unit.value = data.unit.name;
              if (data.brand_id) {
                brand.value = data.brand.name;
              }
              sku.value = data.sku;
              minQty.value = data.minQty;
              qty.value = data.qty;
              description.value = data.description;
              price.value = data.price;
              tax.value = data.tax;
              discountType.value = data.discountType;
              discountValue.value = data.discountValue;
              status.value = data.status;
              avatar.value = data.avatar;
              console.log(data);
              _context.next = 28;
              break;
            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
            case 28:
              busy.value = false;
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 25]]);
      }));
      return function show() {
        return _ref.apply(this, arguments);
      };
    }();
    show();
    return _ref2 = {
      busy: busy,
      name: name,
      category: category,
      subCategory: subCategory,
      brand: brand,
      unit: unit
    }, _defineProperty(_ref2, "unit", unit), _defineProperty(_ref2, "sku", sku), _defineProperty(_ref2, "minQty", minQty), _defineProperty(_ref2, "qty", qty), _defineProperty(_ref2, "description", description), _defineProperty(_ref2, "tax", tax), _defineProperty(_ref2, "discountType", discountType), _defineProperty(_ref2, "discountValue", discountValue), _defineProperty(_ref2, "price", price), _defineProperty(_ref2, "status", status), _defineProperty(_ref2, "avatar", avatar), _ref2;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/components/pageheader/pageheader.vue?vue&type=template&id=59bcee2d":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/components/pageheader/pageheader.vue?vue&type=template&id=59bcee2d ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "page-header"
};
var _hoisted_2 = {
  "class": "page-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title1), 1 /* TEXT */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/product/product-details.vue?vue&type=template&id=0539a6d1":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/product/product-details.vue?vue&type=template&id=0539a6d1 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-lg-8 col-sm-12"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "card-body"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bar-code-view"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/barcode1.png",
  alt: "barcode"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "printimg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/icons/printer.svg",
  alt: "print"
})])], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "productdetails"
};
var _hoisted_8 = {
  "class": "product-bar"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Product", -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Category", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Sub Category", -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Brand", -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Unit", -1 /* HOISTED */);
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "SKU", -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Minimum Qty", -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Quantity", -1 /* HOISTED */);
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Tax", -1 /* HOISTED */);
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Discount Type", -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Discount Value", -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Price", -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Status", -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Description", -1 /* HOISTED */);
var _hoisted_23 = {
  "class": "col-lg-4 col-sm-12"
};
var _hoisted_24 = {
  "class": "card"
};
var _hoisted_25 = {
  "class": "card-body"
};
var _hoisted_26 = {
  "class": "slider-product-details"
};
var _hoisted_27 = {
  "class": "slider-product"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/img/product/product69.jpg",
  alt: "img"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_page_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("page-header");
  var _component_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("slide");
  var _component_navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navigation");
  var _component_carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("carousel");
  var _component_a_spin = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("a-spin");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_page_header, {
    title: "Product Details",
    title1: "Full details of a product"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_spin, {
    spinning: $setup.busy
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /add "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.category), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.subCategory), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.brand), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.unit), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.sku), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.minQty), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.qty), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.tax), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.discountType), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.discountValue), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.price), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.status), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.description), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_carousel, null, {
        addons: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navigation)];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(2, function (slide) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_slide, {
              key: slide,
              "class": "owl-carousel owl-theme product-slide"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.name), 1 /* TEXT */)])];
              }),

              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */);
          }), 64 /* STABLE_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /add ")];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["spinning"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-carousel/dist/carousel.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-carousel/dist/carousel.css ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Color */\n  --vc-clr-primary: #000;\n  --vc-clr-secondary: #090f207f;\n  --vc-clr-white: #ffffff;\n\n  /* Icon */\n  --vc-icn-width: 1.2em;\n\n  /* Navigation */\n  --vc-nav-width: 30px;\n  --vc-nav-height: 30px;\n  --vc-nav-border-radius: 0;\n  --vc-nav-color: var(--vc-clr-primary);\n  --vc-nav-color-hover: var(--vc-clr-secondary);\n  --vc-nav-background: transparent;\n\n  /* Pagination */\n  --vc-pgn-width: 12px;\n  --vc-pgn-height: 4px;\n  --vc-pgn-margin: 4px;\n  --vc-pgn-border-radius: 0;\n  --vc-pgn-background-color: var(--vc-clr-secondary);\n  --vc-pgn-active-color: var(--vc-clr-primary);\n}\n.carousel__pagination {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  line-height: 0;\n  margin: 10px 0 0;\n}\n\n.carousel__pagination-button {\n  display: block;\n  border: 0;\n  margin: 0;\n  cursor: pointer;\n  padding: var(--vc-pgn-margin);\n  background: transparent;\n}\n\n.carousel__pagination-button::after {\n  display: block;\n  content: '';\n  width: var(--vc-pgn-width);\n  height: var(--vc-pgn-height);\n  border-radius: var(--vc-pgn-border-radius);\n  background-color: var(--vc-pgn-background-color);\n}\n\n.carousel__pagination-button:hover::after,\n.carousel__pagination-button--active::after {\n  background-color: var(--vc-pgn-active-color);\n}\n.carousel__prev,\n.carousel__next {\n  box-sizing: content-box;\n  background: var(--vc-nav-background);\n  border-radius: var(--vc-nav-border-radius);\n  width: var(--vc-nav-width);\n  height: var(--vc-nav-height);\n  text-align: center;\n  font-size: var(--vc-nav-height);\n  padding: 0;\n  color: var(--vc-nav-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  border: 0;\n  cursor: pointer;\n  margin: 0 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.carousel__prev:hover,\n.carousel__next:hover {\n  color: var(--vc-nav-color-hover);\n}\n\n.carousel__next--disabled,\n.carousel__prev--disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.carousel__prev {\n  left: 0;\n}\n\n.carousel__next {\n  right: 0;\n}\n\n.carousel--rtl .carousel__prev {\n  left: auto;\n  right: 0;\n}\n\n.carousel--rtl .carousel__next {\n  right: auto;\n  left: 0;\n}\n.carousel {\n  position: relative;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.carousel * {\n  box-sizing: border-box;\n}\n\n.carousel__track {\n  display: flex;\n  padding: 0 !important;\n  position: relative;\n  touch-action: none;\n  overscroll-behavior: none;\n}\n\n.carousel__viewport {\n  overflow: hidden;\n}\n\n.carousel__sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.carousel__icon {\n  width: var(--vc-icn-width);\n  height: var(--vc-icn-width);\n  fill: currentColor;\n}\n.carousel__slide {\n  scroll-snap-stop: auto;\n  flex-shrink: 0;\n  margin: 0;\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* Fix iOS scrolling #22 */\n  transform: translateZ(0);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.css":
/*!******************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./carousel.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue3-carousel/dist/carousel.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_carousel_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./vue/components/pageheader/pageheader.vue":
/*!**************************************************!*\
  !*** ./vue/components/pageheader/pageheader.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageheader_vue_vue_type_template_id_59bcee2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageheader.vue?vue&type=template&id=59bcee2d */ "./vue/components/pageheader/pageheader.vue?vue&type=template&id=59bcee2d");
/* harmony import */ var _pageheader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageheader.vue?vue&type=script&lang=js */ "./vue/components/pageheader/pageheader.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_school_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_school_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_pageheader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_pageheader_vue_vue_type_template_id_59bcee2d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vue/components/pageheader/pageheader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vue/view/product/product-details.vue":
/*!**********************************************!*\
  !*** ./vue/view/product/product-details.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_details_vue_vue_type_template_id_0539a6d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.vue?vue&type=template&id=0539a6d1 */ "./vue/view/product/product-details.vue?vue&type=template&id=0539a6d1");
/* harmony import */ var _product_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.vue?vue&type=script&lang=js */ "./vue/view/product/product-details.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_school_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_school_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_product_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_product_details_vue_vue_type_template_id_0539a6d1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vue/view/product/product-details.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vue/components/pageheader/pageheader.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./vue/components/pageheader/pageheader.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pageheader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pageheader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pageheader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/components/pageheader/pageheader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vue/view/product/product-details.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./vue/view/product/product-details.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_details_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./product-details.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/product/product-details.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vue/components/pageheader/pageheader.vue?vue&type=template&id=59bcee2d":
/*!********************************************************************************!*\
  !*** ./vue/components/pageheader/pageheader.vue?vue&type=template&id=59bcee2d ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pageheader_vue_vue_type_template_id_59bcee2d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_pageheader_vue_vue_type_template_id_59bcee2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./pageheader.vue?vue&type=template&id=59bcee2d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/components/pageheader/pageheader.vue?vue&type=template&id=59bcee2d");


/***/ }),

/***/ "./vue/view/product/product-details.vue?vue&type=template&id=0539a6d1":
/*!****************************************************************************!*\
  !*** ./vue/view/product/product-details.vue?vue&type=template&id=0539a6d1 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_details_vue_vue_type_template_id_0539a6d1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_details_vue_vue_type_template_id_0539a6d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./product-details.vue?vue&type=template&id=0539a6d1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./vue/view/product/product-details.vue?vue&type=template&id=0539a6d1");


/***/ }),

/***/ "./node_modules/vue3-carousel/dist/carousel.es.js":
/*!********************************************************!*\
  !*** ./node_modules/vue3-carousel/dist/carousel.es.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "Navigation": () => (/* binding */ Navigation),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "Slide": () => (/* binding */ Slide)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
 * Vue 3 Carousel 0.2.16
 * (c) 2023
 * @license MIT
 */


const defaultConfigs = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: 'center',
    wrapAround: false,
    throttle: 16,
    pauseAutoplayOnHover: false,
    mouseDrag: true,
    touchDrag: true,
    dir: 'ltr',
    breakpoints: undefined,
};

const carouselProps = {
    // count of items to showed per view
    itemsToShow: {
        default: defaultConfigs.itemsToShow,
        type: Number,
    },
    // count of items to be scrolled
    itemsToScroll: {
        default: defaultConfigs.itemsToScroll,
        type: Number,
    },
    // control infinite scrolling mode
    wrapAround: {
        default: defaultConfigs.wrapAround,
        type: Boolean,
    },
    // control max drag
    throttle: {
        default: defaultConfigs.throttle,
        type: Number,
    },
    // control snap position alignment
    snapAlign: {
        default: defaultConfigs.snapAlign,
        validator(value) {
            // The value must match one of these strings
            return ['start', 'end', 'center', 'center-even', 'center-odd'].includes(value);
        },
    },
    // sliding transition time in ms
    transition: {
        default: defaultConfigs.transition,
        type: Number,
    },
    // an object to store breakpoints
    breakpoints: {
        default: defaultConfigs.breakpoints,
        type: Object,
    },
    // time to auto advance slides in ms
    autoplay: {
        default: defaultConfigs.autoplay,
        type: Number,
    },
    // pause autoplay when mouse hover over the carousel
    pauseAutoplayOnHover: {
        default: defaultConfigs.pauseAutoplayOnHover,
        type: Boolean,
    },
    // slide number number of initial slide
    modelValue: {
        default: undefined,
        type: Number,
    },
    // toggle mouse dragging.
    mouseDrag: {
        default: defaultConfigs.mouseDrag,
        type: Boolean,
    },
    // toggle mouse dragging.
    touchDrag: {
        default: defaultConfigs.touchDrag,
        type: Boolean,
    },
    // control snap position alignment
    dir: {
        default: defaultConfigs.dir,
        validator(value) {
            // The value must match one of these strings
            return ['rtl', 'ltr'].includes(value);
        },
    },
    // an object to pass all settings
    settings: {
        default() {
            return {};
        },
        type: Object,
    },
};

function getMaxSlideIndex({ config, slidesCount }) {
    const { snapAlign, wrapAround, itemsToShow = 1 } = config;
    if (wrapAround) {
        return Math.max(slidesCount - 1, 0);
    }
    let output;
    switch (snapAlign) {
        case 'start':
            output = slidesCount - itemsToShow;
            break;
        case 'end':
            output = slidesCount - 1;
            break;
        case 'center':
        case 'center-odd':
            output = slidesCount - Math.ceil((itemsToShow - 0.5) / 2);
            break;
        case 'center-even':
            output = slidesCount - Math.ceil(itemsToShow / 2);
            break;
        default:
            output = 0;
            break;
    }
    return Math.max(output, 0);
}

function getMinSlideIndex({ config, slidesCount }) {
    const { wrapAround, snapAlign, itemsToShow = 1 } = config;
    let output = 0;
    if (wrapAround || itemsToShow > slidesCount) {
        return output;
    }
    switch (snapAlign) {
        case 'start':
            output = 0;
            break;
        case 'end':
            output = itemsToShow - 1;
            break;
        case 'center':
        case 'center-odd':
            output = Math.floor((itemsToShow - 1) / 2);
            break;
        case 'center-even':
            output = Math.floor((itemsToShow - 2) / 2);
            break;
        default:
            output = 0;
            break;
    }
    return output;
}

function getNumberInRange({ val, max, min }) {
    if (max < min) {
        return val;
    }
    return Math.min(Math.max(val, min), max);
}

function getSlidesToScroll({ config, currentSlide, slidesCount }) {
    const { snapAlign, wrapAround, itemsToShow = 1 } = config;
    let output = currentSlide;
    switch (snapAlign) {
        case 'center':
        case 'center-odd':
            output -= (itemsToShow - 1) / 2;
            break;
        case 'center-even':
            output -= (itemsToShow - 2) / 2;
            break;
        case 'end':
            output -= itemsToShow - 1;
            break;
    }
    if (wrapAround) {
        return output;
    }
    return getNumberInRange({
        val: output,
        max: slidesCount - itemsToShow,
        min: 0,
    });
}

function getSlidesVNodes(vNode) {
    if (!vNode)
        return [];
    return vNode.reduce((acc, node) => {
        var _a;
        if (node.type === vue__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
            return [...acc, ...getSlidesVNodes(node.children)];
        }
        if (((_a = node.type) === null || _a === void 0 ? void 0 : _a.name) === 'CarouselSlide') {
            return [...acc, node];
        }
        return acc;
    }, []);
}

function mapNumberToRange({ val, max, min = 0 }) {
    if (val > max) {
        return mapNumberToRange({ val: val - (max + 1), max, min });
    }
    if (val < min) {
        return mapNumberToRange({ val: val + (max + 1), max, min });
    }
    return val;
}

/**
 * return a throttle version of the function
 * Throttling
 *
 */
// eslint-disable-next-line no-unused-vars
function throttle(fn, limit) {
    let inThrottle;
    if (!limit) {
        return fn;
    }
    return function (...args) {
        const self = this;
        if (!inThrottle) {
            fn.apply(self, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * return a debounced version of the function
 * @param fn
 * @param delay
 */
// eslint-disable-next-line no-unused-vars
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    };
}

var ARIAComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ARIA',
    setup() {
        const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesCount', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        return () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
            class: ['carousel__liveregion', 'carousel__sr-only'],
            'aria-live': 'polite',
            'aria-atomic': 'true',
        }, `Item ${currentSlide.value + 1} of ${slidesCount.value}`);
    },
});

var Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Carousel',
    props: carouselProps,
    setup(props, { slots, emit, expose }) {
        var _a;
        const root = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const slides = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const slideWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const slidesCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        let breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
        // generate carousel configs
        let __defaultConfig = Object.assign({}, defaultConfigs);
        // current config
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, __defaultConfig));
        // slides
        const currentSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((_a = props.modelValue) !== null && _a !== void 0 ? _a : 0);
        const prevSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const middleSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const maxSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const minSlideIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        let autoplayTimer;
        let transitionTimer;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('config', config);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesCount', slidesCount);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('currentSlide', currentSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('maxSlide', maxSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('minSlide', minSlideIndex);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slideWidth', slideWidth);
        /**
         * Configs
         */
        function initDefaultConfigs() {
            // generate carousel configs
            const mergedConfigs = Object.assign(Object.assign({}, props), props.settings);
            // Set breakpoints
            breakpoints = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(Object.assign({}, mergedConfigs.breakpoints));
            // remove extra values
            __defaultConfig = Object.assign(Object.assign({}, mergedConfigs), { settings: undefined, breakpoints: undefined });
            bindConfigs(__defaultConfig);
        }
        function updateBreakpointsConfigs() {
            if (!Object.keys(breakpoints.value).length)
                return;
            const breakpointsArray = Object.keys(breakpoints.value)
                .map((key) => Number(key))
                .sort((a, b) => +b - +a);
            let newConfig = Object.assign({}, __defaultConfig);
            breakpointsArray.some((breakpoint) => {
                const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
                if (isMatched) {
                    newConfig = Object.assign(Object.assign({}, newConfig), breakpoints.value[breakpoint]);
                    return true;
                }
                return false;
            });
            bindConfigs(newConfig);
        }
        function bindConfigs(newConfig) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            Object.entries(newConfig).forEach(([key, val]) => (config[key] = val));
        }
        const handleWindowResize = debounce(() => {
            updateBreakpointsConfigs();
            updateSlidesData();
            updateSlideWidth();
        }, 16);
        /**
         * Setup functions
         */
        function updateSlideWidth() {
            if (!root.value)
                return;
            const rect = root.value.getBoundingClientRect();
            slideWidth.value = rect.width / config.itemsToShow;
        }
        function updateSlidesData() {
            if (slidesCount.value <= 0)
                return;
            middleSlideIndex.value = Math.ceil((slidesCount.value - 1) / 2);
            maxSlideIndex.value = getMaxSlideIndex({ config, slidesCount: slidesCount.value });
            minSlideIndex.value = getMinSlideIndex({ config, slidesCount: slidesCount.value });
            if (!config.wrapAround) {
                currentSlideIndex.value = getNumberInRange({
                    val: currentSlideIndex.value,
                    max: maxSlideIndex.value,
                    min: minSlideIndex.value,
                });
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => setTimeout(() => {
                updateBreakpointsConfigs();
                updateSlidesData();
                updateSlideWidth();
                emit('init');
            }, 16));
            initAutoplay();
            window.addEventListener('resize', handleWindowResize, { passive: true });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
            if (transitionTimer) {
                clearTimeout(transitionTimer);
            }
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
            }
            window.removeEventListener('resize', handleWindowResize, {
                passive: true,
            });
        });
        /**
         * Carousel Event listeners
         */
        let isTouch = false;
        const startPosition = { x: 0, y: 0 };
        const endPosition = { x: 0, y: 0 };
        const dragged = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({ x: 0, y: 0 });
        const isHover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const handleMouseEnter = () => {
            isHover.value = true;
        };
        const handleMouseLeave = () => {
            isHover.value = false;
        };
        function handleDragStart(event) {
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) {
                return;
            }
            isTouch = event.type === 'touchstart';
            if (!isTouch) {
                event.preventDefault();
            }
            if ((!isTouch && event.button !== 0) || isSliding.value) {
                return;
            }
            startPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            startPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            document.addEventListener(isTouch ? 'touchmove' : 'mousemove', handleDragging, true);
            document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd, true);
        }
        const handleDragging = throttle((event) => {
            endPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
            endPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
            const deltaX = endPosition.x - startPosition.x;
            const deltaY = endPosition.y - startPosition.y;
            dragged.y = deltaY;
            dragged.x = deltaX;
        }, config.throttle);
        function handleDragEnd() {
            const direction = config.dir === 'rtl' ? -1 : 1;
            const tolerance = Math.sign(dragged.x) * 0.4;
            const draggedSlides = Math.round(dragged.x / slideWidth.value + tolerance) * direction;
            // Prevent clicking if there is clicked slides
            if (draggedSlides && !isTouch) {
                const captureClick = (e) => {
                    e.stopPropagation();
                    window.removeEventListener('click', captureClick, true);
                };
                window.addEventListener('click', captureClick, true);
            }
            slideTo(currentSlideIndex.value - draggedSlides);
            dragged.x = 0;
            dragged.y = 0;
            document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleDragging, true);
            document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd, true);
        }
        /**
         * Autoplay
         */
        function initAutoplay() {
            if (!config.autoplay || config.autoplay <= 0) {
                return;
            }
            autoplayTimer = setInterval(() => {
                if (config.pauseAutoplayOnHover && isHover.value) {
                    return;
                }
                next();
            }, config.autoplay);
        }
        function resetAutoplay() {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
                autoplayTimer = null;
            }
            initAutoplay();
        }
        /**
         * Navigation function
         */
        const isSliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        function slideTo(slideIndex) {
            const currentVal = config.wrapAround
                ? slideIndex
                : getNumberInRange({
                    val: slideIndex,
                    max: maxSlideIndex.value,
                    min: minSlideIndex.value,
                });
            if (currentSlideIndex.value === currentVal || isSliding.value) {
                return;
            }
            emit('slide-start', {
                slidingToIndex: slideIndex,
                currentSlideIndex: currentSlideIndex.value,
                prevSlideIndex: prevSlideIndex.value,
                slidesCount: slidesCount.value,
            });
            isSliding.value = true;
            prevSlideIndex.value = currentSlideIndex.value;
            currentSlideIndex.value = currentVal;
            transitionTimer = setTimeout(() => {
                if (config.wrapAround) {
                    const mappedNumber = mapNumberToRange({
                        val: currentVal,
                        max: maxSlideIndex.value,
                        min: 0,
                    });
                    if (mappedNumber !== currentSlideIndex.value) {
                        currentSlideIndex.value = mappedNumber;
                        emit('loop', {
                            currentSlideIndex: currentSlideIndex.value,
                            slidingToIndex: slideIndex,
                        });
                    }
                }
                emit('update:modelValue', currentSlideIndex.value);
                emit('slide-end', {
                    currentSlideIndex: currentSlideIndex.value,
                    prevSlideIndex: prevSlideIndex.value,
                    slidesCount: slidesCount.value,
                });
                isSliding.value = false;
                resetAutoplay();
            }, config.transition);
        }
        function next() {
            slideTo(currentSlideIndex.value + config.itemsToScroll);
        }
        function prev() {
            slideTo(currentSlideIndex.value - config.itemsToScroll);
        }
        const nav = { slideTo, next, prev };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('nav', nav);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('isSliding', isSliding);
        /**
         * Track style
         */
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => getSlidesToScroll({
            config,
            currentSlide: currentSlideIndex.value,
            slidesCount: slidesCount.value,
        }));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('slidesToScroll', slidesToScroll);
        const trackStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const direction = config.dir === 'rtl' ? -1 : 1;
            const xScroll = slidesToScroll.value * slideWidth.value * direction;
            return {
                transform: `translateX(${dragged.x - xScroll}px)`,
                transition: `${isSliding.value ? config.transition : 0}ms`,
                margin: config.wrapAround ? `0 -${slidesCount.value * slideWidth.value}px` : '',
                width: `100%`,
            };
        });
        function restartCarousel() {
            initDefaultConfigs();
            updateBreakpointsConfigs();
            updateSlidesData();
            updateSlideWidth();
            resetAutoplay();
        }
        // Update the carousel on props change
        Object.keys(carouselProps).forEach((prop) => {
            if (['modelValue'].includes(prop))
                return;
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props[prop], restartCarousel);
        });
        // Handle changing v-model value
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => props['modelValue'], (val) => {
            if (val !== currentSlideIndex.value) {
                slideTo(Number(val));
            }
        });
        // Handel when slides added/removed
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(slidesCount, updateSlidesData);
        // Init carousel
        initDefaultConfigs();
        const data = {
            config,
            slidesCount,
            slideWidth,
            next,
            prev,
            slideTo,
            currentSlide: currentSlideIndex,
            maxSlide: maxSlideIndex,
            minSlide: minSlideIndex,
            middleSlide: middleSlideIndex,
        };
        expose({
            updateBreakpointsConfigs,
            updateSlidesData,
            updateSlideWidth,
            initDefaultConfigs,
            restartCarousel,
            slideTo,
            next,
            prev,
            nav,
            data,
        });
        const slotSlides = slots.default || slots.slides;
        const slotAddons = slots.addons;
        const slotsProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
        return () => {
            const slidesElements = getSlidesVNodes(slotSlides === null || slotSlides === void 0 ? void 0 : slotSlides(slotsProps));
            const addonsElements = (slotAddons === null || slotAddons === void 0 ? void 0 : slotAddons(slotsProps)) || [];
            slidesElements.forEach((el, index) => (el.props.index = index));
            let output = slidesElements;
            if (config.wrapAround) {
                const slidesBefore = slidesElements.map((el, index) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(el, {
                    index: -slidesElements.length + index,
                    isClone: true,
                    key: `clone-before-${index}`,
                }));
                const slidesAfter = slidesElements.map((el, index) => (0,vue__WEBPACK_IMPORTED_MODULE_0__.cloneVNode)(el, {
                    index: slidesElements.length + index,
                    isClone: true,
                    key: `clone-after-${index}`,
                }));
                output = [...slidesBefore, ...slidesElements, ...slidesAfter];
            }
            slides.value = slidesElements;
            slidesCount.value = Math.max(slidesElements.length, 1);
            const trackEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', {
                class: 'carousel__track',
                style: trackStyle.value,
                onMousedownCapture: config.mouseDrag ? handleDragStart : null,
                onTouchstartPassiveCapture: config.touchDrag ? handleDragStart : null,
            }, output);
            const viewPortEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', { class: 'carousel__viewport' }, trackEl);
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('section', {
                ref: root,
                class: {
                    carousel: true,
                    'carousel--rtl': config.dir === 'rtl',
                },
                dir: config.dir,
                'aria-label': 'Gallery',
                tabindex: '0',
                onMouseenter: handleMouseEnter,
                onMouseleave: handleMouseLeave,
            }, [viewPortEl, addonsElements, (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(ARIAComponent)]);
        };
    },
});

const icons = {
    arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
};

const Icon = (props) => {
    const iconName = props.name;
    if (!iconName || typeof iconName !== 'string') {
        return;
    }
    const path = icons[iconName];
    const pathEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('path', { d: path });
    const iconTitle = (props.title || iconName);
    const titleEl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('title', iconTitle);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', {
        class: 'carousel__icon',
        viewBox: '0 0 24 24',
        role: 'img',
        ariaLabel: iconTitle,
    }, [titleEl, pathEl]);
};
Icon.props = { name: String, title: String };

const Navigation = (props, { slots, attrs }) => {
    const { next: slotNext, prev: slotPrev } = slots || {};
    const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    const { dir, wrapAround } = config;
    const isRTL = dir === 'rtl';
    const prevButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__prev',
            !wrapAround && currentSlide.value <= minSlide.value && 'carousel__prev--disabled',
            attrs === null || attrs === void 0 ? void 0 : attrs.class,
        ],
        'aria-label': `Navigate to previous slide`,
        onClick: nav.prev,
    }, (slotPrev === null || slotPrev === void 0 ? void 0 : slotPrev()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: isRTL ? 'arrowRight' : 'arrowLeft' }));
    const nextButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
        type: 'button',
        class: [
            'carousel__next',
            !wrapAround && currentSlide.value >= maxSlide.value && 'carousel__next--disabled',
            attrs === null || attrs === void 0 ? void 0 : attrs.class,
        ],
        'aria-label': `Navigate to next slide`,
        onClick: nav.next,
    }, (slotNext === null || slotNext === void 0 ? void 0 : slotNext()) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { name: isRTL ? 'arrowLeft' : 'arrowRight' }));
    return [prevButton, nextButton];
};

const Pagination = () => {
    const maxSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('maxSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const minSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('minSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1));
    const nav = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('nav', {});
    const isActive = (slide) => mapNumberToRange({
        val: currentSlide.value,
        max: maxSlide.value,
        min: 0,
    }) === slide;
    const children = [];
    for (let slide = minSlide.value; slide < maxSlide.value + 1; slide++) {
        const button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('button', {
            type: 'button',
            class: {
                'carousel__pagination-button': true,
                'carousel__pagination-button--active': isActive(slide),
            },
            'aria-label': `Navigate to slide ${slide + 1}`,
            onClick: () => nav.slideTo(slide),
        });
        const item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', { class: 'carousel__pagination-item', key: slide }, button);
        children.push(item);
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('ol', { class: 'carousel__pagination' }, children);
};

var Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'CarouselSlide',
    props: {
        index: {
            type: Number,
            default: 1,
        },
        isClone: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { slots }) {
        const config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('config', (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(Object.assign({}, defaultConfigs)));
        const currentSlide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('currentSlide', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slidesToScroll = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slidesToScroll', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const slideWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('slideWidth', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0));
        const isSliding = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('isSliding', (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false));
        const slideStyle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            width: slideWidth.value ? `${slideWidth.value}px` : `100%`,
        }));
        const isActive = () => props.index === currentSlide.value;
        const isPrev = () => props.index === currentSlide.value - 1;
        const isNext = () => props.index === currentSlide.value + 1;
        const isVisible = () => {
            const min = Math.floor(slidesToScroll.value);
            const max = Math.ceil(slidesToScroll.value + config.itemsToShow - 1);
            return props.index >= min && props.index <= max;
        };
        return () => {
            var _a;
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('li', {
                style: slideStyle.value,
                class: {
                    carousel__slide: true,
                    'carousel_slide--clone': props.isClone,
                    'carousel__slide--visible': isVisible(),
                    'carousel__slide--active': isActive(),
                    'carousel__slide--prev': isPrev(),
                    'carousel__slide--next': isNext(),
                    'carousel__slide--sliding': isSliding.value,
                },
                'aria-hidden': !isVisible(),
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    },
});




/***/ }),

/***/ "./vue/assets/json/productdetails.json":
/*!*********************************************!*\
  !*** ./vue/assets/json/productdetails.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","header":"Product","header2":"Macbook pro"},{"id":"2","header":"Category","header2":"Computers"},{"id":"3","header":"Sub Category","header2":"None"},{"id":"4","header":"Brand","header2":"None"},{"id":"5","header":"Unit","header2":"Piece"},{"id":"6","header":"SKU","header2":"PT0001"},{"id":"7","header":"Minimum Qty","header2":"5"},{"id":"8","header":"Quantity","header2":"50"},{"id":"9","header":"Tax","header2":"0.00 %"},{"id":"10","header":"Discount Type","header2":"Percentage"},{"id":"11","header":"Price","header2":"1500.00"},{"id":"12","header":"Status","header2":"Active"},{"id":"13","header":"Description","header2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,"}]');

/***/ })

}]);