/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(161)
	var __weex_style__ = __webpack_require__(162)
	var __weex_script__ = __webpack_require__(163)
	
	__weex_define__('@weex-component/0045ca496c08ad0388bf2f4f64c9c5f8', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/0045ca496c08ad0388bf2f4f64c9c5f8',undefined,undefined)

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "navbar-con"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "navbar"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "btn-back"
	          ],
	          "events": {
	            "click": "goHome"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "btn-arrow-left"
	              ],
	              "attr": {
	                "src": "http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "btn-text"
	              ],
	              "attr": {
	                "value": "返回"
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = {
	  "navbar-con": {
	    "height": 108,
	    "paddingTop": 20
	  },
	  "navbar": {
	    "zIndex": 1000,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "height": 88,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#dddddd"
	  },
	  "btn-back": {
	    "zIndex": 1002,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "width": 180,
	    "height": 88
	  },
	  "btn-arrow-left": {
	    "width": 60,
	    "height": 60,
	    "marginLeft": 10
	  },
	  "btn-text": {
	    "color": "#0f89f5"
	  },
	  "title": {
	    "position": "absolute",
	    "left": 180,
	    "right": 180,
	    "top": 0,
	    "height": 88,
	    "lineHeight": 88,
	    "fontSize": 36,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  methods: {
	    goHome: function goHome() {
	      navigator.pop();
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)
	
	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },

/***/ 161:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "navbar",
	      "attr": {
	        "title": "设置地图缩放"
	      }
	    },
	    {
	      "type": "weex-amap",
	      "classList": [
	        "map"
	      ],
	      "id": "map2017",
	      "attr": {
	        "sdkKey": function () {return this.keys},
	        "zoom": function () {return this.zoom},
	        "center": function () {return this.pos}
	      },
	      "events": {
	        "zoomchange": "zoomHandle"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "map-control"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "Props: zoom"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "tips"
	          ],
	          "attr": {
	            "value": "zoom 表示地图显示的缩放级别；zoomchange可以绑定缩放完后的事件；zoom-enable表示地图是否允许缩放"
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "btn-group"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "events": {
	                "click": "increseZoom"
	              },
	              "shown": function () {return this.zoom<13},
	              "classList": [
	                "btnbox"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "btn"
	                  ],
	                  "attr": {
	                    "value": "放大"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "events": {
	                "click": "decreseZoom"
	              },
	              "shown": function () {return this.zoom>3},
	              "classList": [
	                "btnbox"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "btn",
	                    "btn-reverse"
	                  ],
	                  "attr": {
	                    "value": "缩小"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 162:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  },
	  "map": {
	    "flex": 1,
	    "position": "relative",
	    "backgroundColor": "#ffffff",
	    "minHeight": 800,
	    "borderBottomWidth": 10,
	    "borderBottomColor": "#ffffff"
	  },
	  "map-control": {
	    "paddingTop": 20,
	    "minHeight": 600
	  },
	  "title": {
	    "marginLeft": 20,
	    "paddingLeft": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "fontSize": 36,
	    "borderLeftWidth": 6,
	    "borderLeftColor": "#0f89f5",
	    "color": "#222222",
	    "textAlign": "left"
	  },
	  "tips": {
	    "margin": 20,
	    "padding": 10,
	    "color": "#666666",
	    "fontSize": 20
	  },
	  "btn-group": {
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "btnbox": {
	    "flex": 1
	  },
	  "btn": {
	    "margin": 20,
	    "padding": 20,
	    "backgroundColor": "#1ba1e2",
	    "borderRadius": 5,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  },
	  "btn-reverse": {
	    "backgroundColor": "#ffffff",
	    "color": "#444444",
	    "borderWidth": 2,
	    "borderColor": "#cccccc"
	  }
	}

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(103);
	var Amap = null;
	try {
	  Amap = __weex_require__('@weex-module/amap');
	} catch (err) {
	  console.log(err);
	}
	var modal = __weex_require__('@weex-module/modal');
	module.exports = {
	  data: function () {return {
	    keys: {
	      h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	      ios: '',
	      android: 'db6a973159cb0c2639ad02c617a786ae'
	    },
	    pos: [116.487, 40.00003],
	    zoom: 9
	  }},
	
	  methods: {
	    increseZoom: function increseZoom() {
	      if (this.zoom < 13) {
	        this.zoom++;
	      }
	    },
	    decreseZoom: function decreseZoom() {
	      if (this.zoom > 3) {
	        this.zoom--;
	      }
	    },
	    zoomHandle: function zoomHandle() {
	      modal.alert({
	        message: 'zoom changed!'
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNmNjY1ODk3ZTYxODg3ZmRjNzc/NDQzYyoqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3pvb20ud2U/NmJlNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZiYXIud2U/MzU2MSoqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlPzliNDAqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdmJhci53ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZiYXIud2U/Zjg3YSoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvem9vbS53ZT9iYTM1Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy96b29tLndlPzdkN2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3pvb20ud2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7QUNhQSx5QkFDQTs7OytCQUdBO2lCQUNBO0FBRUE7QUFKQTtBQURBOzs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQsOEJBQTZCLGlCQUFpQjtBQUM5QyxnQ0FBK0I7QUFDL0IsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmLHFDQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2YscUNBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7OztBQ29CQSxxQkFDQTtZQUNBO0tBQ0E7a0JBQ0E7ZUFDQTtlQUNBO0FBQ0E7cUJBQ0E7Ozs7V0FJQTtZQUNBO2dCQUVBO0FBSkE7b0JBS0E7V0FHQTtBQVRBOzs7eUNBV0E7MkJBQ0E7Y0FDQTtBQUNBO0FBQ0E7eUNBQ0E7MEJBQ0E7Y0FDQTtBQUNBO0FBQ0E7dUNBQ0E7O2tCQUdBO0FBRkE7QUFJQTtBQWhCQTtBQVhBIiwiZmlsZSI6InBhZ2VzL3pvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Y2Y2NjU4OTdlNjE4ODdmZGM3NyIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vem9vbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi96b29tLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vem9vbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC8wMDQ1Y2E0OTZjMDhhZDAzODhiZjJmNGY2NGM5YzVmOCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC8wMDQ1Y2E0OTZjMDhhZDAzODhiZjJmNGY2NGM5YzVmOCcsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wYWdlcy96b29tLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwibmF2YmFyLWNvblwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm5hdmJhclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0bi1iYWNrXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnb0hvbWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0bi1hcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHA6Ly9pbWcxLnZ1ZWQudmFudGhpbmsuY24vdnVlZDljOGU3ZTczOGZmOTRhYmVlMjNlYjY5ZDdmMTQwMWU5LnBuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuLXRleHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLov5Tlm55cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGl0bGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luY2x1ZGUvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmF2YmFyLWNvblwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTA4LFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMFxuICB9LFxuICBcIm5hdmJhclwiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTAwMCxcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogODgsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAyLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfSxcbiAgXCJidG4tYmFja1wiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTAwMixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDE4MCxcbiAgICBcImhlaWdodFwiOiA4OFxuICB9LFxuICBcImJ0bi1hcnJvdy1sZWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IDYwLFxuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxMFxuICB9LFxuICBcImJ0bi10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzBmODlmNVwiXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiAxODAsXG4gICAgXCJyaWdodFwiOiAxODAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImhlaWdodFwiOiA4OCxcbiAgICBcImxpbmVIZWlnaHRcIjogODgsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmNsdWRlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm5hdmJhci1jb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLWJhY2tcIiBvbmNsaWNrPVwiZ29Ib21lXCI+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImJ0bi1hcnJvdy1sZWZ0XCIgc3JjPVwiaHR0cDovL2ltZzEudnVlZC52YW50aGluay5jbi92dWVkOWM4ZTdlNzM4ZmY5NGFiZWUyM2ViNjlkN2YxNDAxZTkucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tdGV4dFwiPui/lOWbnjwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAubmF2YmFyLWNvbntcbiAgICBoZWlnaHQ6IDEwODtcbiAgICBwYWRkaW5nLXRvcDogMjA7XG4gIH1cbiAgLm5hdmJhcntcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDg4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkZGQ7XG4gIH1cbiAgLmJ0bi1iYWNre1xuICAgIHotaW5kZXg6IDEwMDI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxODA7XG4gICAgaGVpZ2h0OiA4ODtcbiAgfVxuICAuYnRuLWFycm93LWxlZnR7XG4gICAgd2lkdGg6IDYwO1xuICAgIGhlaWdodDogNjA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwO1xuICB9XG4gIC5idG4tdGV4dHtcbiAgICBjb2xvcjogIzBmODlmNTtcbiAgfVxuICAudGl0bGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6MTgwO1xuICAgIHJpZ2h0OjE4MDtcbiAgICB0b3A6MDtcbiAgICBoZWlnaHQ6IDg4O1xuICAgIGxpbmUtaGVpZ2h0OiA4ODtcbiAgICBmb250LXNpemU6IDM2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gIGNvbnN0IG5hdmlnYXRvciA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9uYXZpZ2F0b3InKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWV0aG9kczoge1xuICAgICAgZ29Ib21lKCkge1xuICAgICAgICBuYXZpZ2F0b3IucG9wKCk7XG4gICAgICB9XG4gICAgfSAgIFxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5jbHVkZS9uYXZiYXIud2U/MTY1MmJhYTgiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9uYXZiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvbmF2YmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJuYXZiYXJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidGl0bGVcIjogXCLorr7nva7lnLDlm77nvKnmlL5cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid2VleC1hbWFwXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFwXCJcbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwibWFwMjAxN1wiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzZGtLZXlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmtleXN9LFxuICAgICAgICBcInpvb21cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnpvb219LFxuICAgICAgICBcImNlbnRlclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zfVxuICAgICAgfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJ6b29tY2hhbmdlXCI6IFwiem9vbUhhbmRsZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXAtY29udHJvbFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlByb3BzOiB6b29tXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXBzXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiem9vbSDooajnpLrlnLDlm77mmL7npLrnmoTnvKnmlL7nuqfliKvvvJt6b29tY2hhbmdl5Y+v5Lul57uR5a6a57yp5pS+5a6M5ZCO55qE5LqL5Lu277ybem9vbS1lbmFibGXooajnpLrlnLDlm77mmK/lkKblhYHorrjnvKnmlL5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuLWdyb3VwXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJpbmNyZXNlWm9vbVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnpvb208MTN9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG5ib3hcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5pS+5aSnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImRlY3Jlc2Vab29tXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuem9vbT4zfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuYm94XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ0blwiLFxuICAgICAgICAgICAgICAgICAgICBcImJ0bi1yZXZlcnNlXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi57yp5bCPXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9wYWdlcy96b29tLndlXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxNyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtYXBcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWluSGVpZ2h0XCI6IDgwMCxcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEwLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtYXAtY29udHJvbFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwibWluSGVpZ2h0XCI6IDYwMFxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMjAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAyMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMTAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogNixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiMwZjg5ZjVcIixcbiAgICBcImNvbG9yXCI6IFwiIzIyMjIyMlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGlwc1wiOiB7XG4gICAgXCJtYXJnaW5cIjogMjAsXG4gICAgXCJwYWRkaW5nXCI6IDEwLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJmb250U2l6ZVwiOiAyMFxuICB9LFxuICBcImJ0bi1ncm91cFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiYnRuYm94XCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImJ0blwiOiB7XG4gICAgXCJtYXJnaW5cIjogMjAsXG4gICAgXCJwYWRkaW5nXCI6IDIwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFiYTFlMlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY3Vyc29yXCI6IFwicG9pbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMjhcbiAgfSxcbiAgXCJidG4tcmV2ZXJzZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNjY2NjY2NcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvcGFnZXMvem9vbS53ZVxuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8bmF2YmFyIHRpdGxlPVwi6K6+572u5Zyw5Zu+57yp5pS+XCI+PC9uYXZiYXI+XG4gICAgPHdlZXgtYW1hcCBjbGFzcz1cIm1hcFwiIGlkPVwibWFwMjAxN1wiIHNkay1rZXk9XCJ7e2tleXN9fVwiIG9uem9vbWNoYW5nZT1cInpvb21IYW5kbGVcIiB6b29tPXt7em9vbX19IGNlbnRlcj17e3Bvc319PlxuICAgIDwvd2VleC1hbWFwPlxuICAgIDxkaXYgY2xhc3M9XCJtYXAtY29udHJvbFwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPlByb3BzOiB6b29tPC90ZXh0PiBcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGlwc1wiPnpvb20g6KGo56S65Zyw5Zu+5pi+56S655qE57yp5pS+57qn5Yir77ybem9vbWNoYW5nZeWPr+S7pee7keWumue8qeaUvuWujOWQjueahOS6i+S7tu+8m3pvb20tZW5hYmxl6KGo56S65Zyw5Zu+5piv5ZCm5YWB6K6457yp5pS+PC90ZXh0PlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiPlxuICAgICAgICA8ZGl2IG9uY2xpY2s9XCJpbmNyZXNlWm9vbVwiIGlmPVwie3t0aGlzLnpvb208MTN9fVwiIGNsYXNzPVwiYnRuYm94XCI+PHRleHQgY2xhc3M9XCJidG5cIiA+5pS+5aSnPC90ZXh0PjwvZGl2PlxuICAgICAgICA8ZGl2IG9uY2xpY2s9XCJkZWNyZXNlWm9vbVwiIGlmPVwie3t0aGlzLnpvb20+M319XCIgY2xhc3M9XCJidG5ib3hcIj48dGV4dCBjbGFzcz1cImJ0biBidG4tcmV2ZXJzZVwiID7nvKnlsI88L3RleHQ+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5tYXB7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiA4MDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgfVxuICAubWFwLWNvbnRyb2x7XG4gICAgcGFkZGluZy10b3A6IDIwO1xuICAgIG1pbi1oZWlnaHQ6IDYwMDtcbiAgfVxuICAudGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwO1xuICAgIHBhZGRpbmctbGVmdDogMjA7XG4gICAgcGFkZGluZy10b3A6IDEwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDY7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwZjg5ZjU7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAudGlwc3tcbiAgICBtYXJnaW46IDIwO1xuICAgIHBhZGRpbmc6IDEwO1xuICAgIGNvbG9yOiM2NjY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5idG4tZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5idG5ib3h7XG4gICAgIGZsZXg6MTtcbiAgfVxuICAuYnRue1xuICAgIG1hcmdpbjogMjA7XG4gICAgcGFkZGluZzogMjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiYTFlMjtcbiAgICBib3JkZXItcmFkaXVzOiA1O1xuICAgIGNvbG9yOiAjZmZmOyBcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5idG4tcmV2ZXJzZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJvcmRlci13aWR0aDogMjtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgXG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIHJlcXVpcmUoJy4uL2luY2x1ZGUvbmF2YmFyLndlJyk7XG4gIHZhciBBbWFwID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBBbWFwID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FtYXAnKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG4gIHZhciBtb2RhbCA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2RhbCcpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiB7XG4gICAgICAgIGg1OidmNGI5OWRjZDUxNzUyMTQyZWMwZjFiZGNiOWE4ZWMwMicsXG4gICAgICAgIGlvczogJycsXG4gICAgICAgIGFuZHJvaWQ6ICdkYjZhOTczMTU5Y2IwYzI2MzlhZDAyYzYxN2E3ODZhZSdcbiAgICAgIH0sXG4gICAgICBwb3M6IFsxMTYuNDg3LCA0MC4wMDAwM10sXG4gICAgICB6b29tOiA5LFxuICAgIH0sXG4gICAgXG4gICAgbWV0aG9kczoge1xuICAgICAgaW5jcmVzZVpvb20oKSB7XG4gICAgICAgIGlmKHRoaXMuem9vbSA8IDEzKSB7XG4gICAgICAgICAgdGhpcy56b29tICsrO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVjcmVzZVpvb20oKSB7XG4gICAgICAgIGlmKHRoaXMuem9vbSA+IDMpIHtcbiAgICAgICAgICB0aGlzLnpvb20gLS07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB6b29tSGFuZGxlKCkge1xuICAgICAgICBtb2RhbC5hbGVydCh7XG4gICAgICAgICAgbWVzc2FnZTogJ3pvb20gY2hhbmdlZCEnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3pvb20ud2U/Nzc3MDhjOTMiXSwic291cmNlUm9vdCI6IiJ9