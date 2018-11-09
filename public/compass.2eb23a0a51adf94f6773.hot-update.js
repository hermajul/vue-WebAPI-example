webpackHotUpdate("compass",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!../../../../../usr/lib/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Compass.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!/usr/lib/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Compass.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      value: 50,\n      orientation: null\n    };\n  },\n  methods: {\n    handleOrientation: function handleOrientation(evt) {\n      console.log(evt);\n      this._data.orientation = evt;\n\n      if (evt.alpha !== null) {\n        document.getElementById('compass-bg').style.transform = 'rotate(' + -evt.alpha + 'deg)';\n      }\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\"deviceorientation\", this.handleOrientation, true);\n    console.log(window.navigator);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuLi8uLi8uLi8uLi8uLi91c3IvbGliL25vZGVfbW9kdWxlcy9AdnVlL2NsaS1wbHVnaW4tYmFiZWwvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvdmlld3MvQ29tcGFzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0NvbXBhc3MudnVlPzlhMDUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDx2LWNvbnRhaW5lcj5cbiAgICA8di1sYXlvdXQgcm93IHdyYXA+XG4gICAgICAgIDx2LWZsZXggeHMxMiBzbTggbWQ2IGxnNiB4bDQgb2Zmc2V0LXhzMCBvZmZzZXQtc20yIG9mZnNldC1tZDMgb2Zmc2V0LXhsND5cbiAgICAgICAgPHYtY2FyZCB2LWlmPVwib3JpZW50YXRpb24uYWxwaGEgIT09IG51bGxcIj5cbiAgICAgICAgICAgIDx2LXRvb2xiYXIgZmxhdD5cbiAgICAgICAgICAgICAgICA8di10b29sYmFyLXRpdGxlPkNvbXBhc3M8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgIDwvdi10b29sYmFyPlxuICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyBteS0yIGp1c3RpZnktY2VudGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29tcGFzcy1wb2ludGVyXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImNvbXBhc3MtYmdcIiBzcmM9XCIuLi9hc3NldHMvY29tcGFzcy1iZy5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgICAgIDx2LWxheW91dCByb3cgbXktMiBqdXN0aWZ5LWNlbnRlciA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2hpcCBkYXJrPmFscGhhPC92LWNoaXA+IDx2LWNoaXAgZGFyaz57e29yaWVudGF0aW9uLmFscGhhLnRvRml4ZWQoMTApfX08L3YtY2hpcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPHYtY2FyZCB2LWVsc2U+XG4gICAgICAgICAgICA8di10b29sYmFyIGZsYXQ+XG4gICAgICAgICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5Ob3Qgc3VwcG9ydGVkPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgIFRoZXJlIGlzIG5vIGRldmljZSBvcmllbnRhdGlvbiBldmVudCBpbiB5b3VyIGJyb3dzZXIsIHRyeSBpdCB3aXRoIHlvdXIgc21hcnRwaG9uZS5cbiAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgZnVuY3Rpb24uXG4gICAgICAgICAgICBDaGVjayA8YSBocmVmPVwiaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWRldmljZW9yaWVudGF0aW9uXCI+aHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWRldmljZW9yaWVudGF0aW9uPC9hPiB0byBmaW5kIG91dCB3aGljaCBicm93c2VycyBhcmUgc3VwcG9ydGVkLlxuXG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtZmxleD5cbiAgICA8L3YtbGF5b3V0PlxuICAgIDwvdi1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogNTAsXG4gICAgICAgIG9yaWVudGF0aW9uOiBudWxsLFxuICAgIH1cbiAgfSwgICAgICBcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZU9yaWVudGF0aW9uIDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldnQpO1xuICAgICAgICB0aGlzLl9kYXRhLm9yaWVudGF0aW9uID0gZXZ0O1xuICAgICAgICBpZihldnQuYWxwaGEgIT09IG51bGwpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGFzcy1iZycpLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJysoLWV2dC5hbHBoYSkrJ2RlZyknO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgdGhpcy5oYW5kbGVPcmllbnRhdGlvbiwgdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cubmF2aWdhdG9yKVxuICB9XG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgICNjb21wYXNzLXBvaW50ZXIge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9jb21wYXNzLXBvaW50ZXIucG5nXCIpO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!../../../../../usr/lib/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Compass.vue?vue&type=script&lang=js&\n");

/***/ })

})