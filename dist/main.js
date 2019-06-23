/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst API_KEY = 'KJcLpsEHn1PkRBnZLa5825iT94JQOhaSSwEa2xry';\nconst BASE_REQUEST_URL = 'https://api.nal.usda.gov/ndb/';\n// 'https://api.nal.usda.gov/ndb/V2/reports?'\nconst DEFAULT_OPTIONS = Object.freeze({\n  responseFormat: 'json',\n  sortType: 'r',\n  maxResults: 10,\n  startAtIndex: 0\n});\n\nclass FoodCompare {\n  constructor(options) {\n    const { responseFormat, sortType, maxResults, startAtIndex } = Object.assign({}, DEFAULT_OPTIONS, options);\n    this.responseFormat = responseFormat;\n    this.sortType = sortType;\n    this.maxResults = maxResults;\n    this.startAtIndex = startAtIndex;\n  }\n\n  async search(searchTerm) {\n    if (!searchTerm) {\n      throw new Error('Missing searchTerm in query.');\n    }\n\n    const searchResults = await this.getFoodItemsForSearchTerm(searchTerm);\n    const { selectElement } = this.buildFoodOptionsSelect(searchResults);\n    selectElement.addEventListener('change', async evt => {\n      this.foodItemNumber = evt.currentTarget.value;\n      console.log(this.foodItemNumber);\n      this.getNutritionInfo(this.foodItemNumber).then(info => {\n        this.parseNutrientInfoForLabel(info.foods[0].food.nutrients);\n      });\n    });\n  }\n\n  async getFoodItemsForSearchTerm(searchTerm) {\n    const url = this.getFoodQueryURL({ searchTerm });\n    const searchResults = await this.fetchSearchResults(url);\n    return searchResults;\n  }\n\n  async fetchSearchResults(url) {\n    const response = await fetch(url);\n    const data = await response.json();\n\n    return data;\n  }\n\n  getFoodQueryURL({\n    searchTerm\n  }) {\n    const encodedSearchTerm = encodeURI(searchTerm);\n    return BASE_REQUEST_URL + 'search/' + '?format=' + this.responseFormat + '&sort=' + this.sortType + '&max=' + this.maxResults + '&offset=' + this.startAtIndex + '&ds=Standard%20Reference' + '&q=' + encodedSearchTerm + '&api_key=' + API_KEY;\n  }\n\n  buildFoodOptionsSelect(searchResults) {\n    const UIContainer = document.getElementById('FoodSelect');\n    const selectElement = UIContainer.querySelector('select');\n\n    searchResults.list.item.forEach(food => {\n      const option = document.createElement('option');\n      option.innerHTML = food.name;\n      option.value = food.ndbno;\n      selectElement.appendChild(option);\n    });\n\n    return {\n      UIContainer,\n      selectElement\n    };\n  }\n\n  async getNutritionInfo(foodNumber) {\n    const url = this.getFoodReportURL(foodNumber);\n    const foodInfo = await this.fetchSearchResults(url);\n    return foodInfo;\n  }\n\n  getFoodReportURL(foodNumber) {\n    return BASE_REQUEST_URL + '/V2/reports' + '?ndbno=' + foodNumber + '&type=b' + '&format=json' + '&api_key=' + API_KEY;\n  }\n\n  parseNutrientInfoForLabel(nutrientInfo) {\n    const calories = this.getNutrientMeasures(nutrientInfo.find(type => type.name === 'Energy'));\n    console.log(calories);\n    console.log(nutrientInfo);\n  }\n\n  getNutrientMeasures(nutrient) {\n    return {\n      name: nutrient.name,\n      value: nutrient.value,\n      unit: nutrient.unit,\n      quantity: nutrient.measures[0].qty,\n      label: nutrient.measures[0].label\n    };\n  }\n}\n\nconst foodCompare = new FoodCompare();\nfoodCompare.search('peanut butter');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });