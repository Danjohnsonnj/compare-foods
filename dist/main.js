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

/***/ "./src/food-label-template.js":
/*!************************************!*\
  !*** ./src/food-label-template.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// Per https://www.fda.gov/food/nutrition-education-resources-materials/how-understand-and-use-nutrition-facts-label\n// and https://www.dsld.nlm.nih.gov/dsld/dailyvalue.jsp\nconst caloriesPerFatGram = 9;\nconst dailyValue = {\n  totalFat: 65,\n  saturatedFat: 20,\n  cholesterol: 300,\n  sodium: 2400,\n  totalCarbohydrate: 300,\n  dietaryFiber: 25,\n  vitaminA: 5000,\n  vitaminC: 90,\n  calcium: 1300,\n  iron: 18\n\n  /*\n  The label markup is modified from the CodePen by the inimitable\n  Chris Coyier, https://chriscoyier.net/, as licensed below.\n  \n  Copyright (c) Chris Coyier - https://codepen.io/chriscoyier/full/egHEK\n  \n  Permission is hereby granted, free of charge, to any person\n  obtaining a copy of this software and associated documentation\n  files (the \"Software\"), to deal in the Software without restriction,\n   including without limitation the rights to use, copy, modify,\n  merge, publish, distribute, sublicense, and/or sell copies of\n  the Software, and to permit persons to whom the Software is\n  furnished to do so, subject to the following conditions:\n  \n  The above copyright notice and this permission notice shall\n  be included in all copies or substantial portions of the Software.\n  \n  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n  DEALINGS IN THE SOFTWARE.\n  */\n\n};const label = function (context) {\n  return `<section class=\"performance-facts\">\n      <header class=\"performance-facts__header\">\n        <h1 class=\"performance-facts__title\">Nutrition Facts</h1>\n        <p>Serving Size ${context.Calories.quantity} ${context.Calories.label}\n        </p>\n      </header>\n      <table class=\"performance-facts__table\">\n        <thead>\n          <tr>\n            <th colspan=\"3\" class=\"small-info\">\n              Amount Per Serving\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th colspan=\"2\">\n              <b>Calories</b>\n              ${context.Calories.value}\n            </th>\n            <td>\n              Calories from Fat\n              ${Math.ceil(context['Total Fat'].value * caloriesPerFatGram)}\n            </td>\n          </tr>\n          <tr class=\"thick-row\">\n            <td colspan=\"3\" class=\"small-info\">\n              <b>% Daily Value*</b>\n            </td>\n          </tr>\n          <tr>\n            <th colspan=\"2\">\n              <b>Total Fat</b>\n              ${context['Total Fat'].value}${context['Total Fat'].unit}\n            </th>\n            <td>\n              <b>${Math.ceil(context['Total Fat'].value / dailyValue.totalFat * 100)}%</b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"blank-cell\">\n            </td>\n            <th>\n              Saturated Fat\n              ${context['Saturated Fat'].value}${context['Saturated Fat'].unit}\n            </th>\n            <td>\n              <b>${Math.ceil(context['Saturated Fat'].value / dailyValue.saturatedFat * 100)}%</b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"blank-cell\">\n            </td>\n            <th>\n              Trans Fat\n              ${context.Sugars.value}${context.Sugars.unit}\n            </th>\n            <td>\n            </td>\n          </tr>\n          <tr>\n            <th colspan=\"2\">\n              <b>Cholesterol</b>\n              ${context.Cholesterol.value}${context.Cholesterol.unit}\n            </th>\n            <td>\n            <b>${Math.ceil(context.Cholesterol.value / dailyValue.cholesterol * 100)}%</b>\n            </td>\n          </tr>\n          <tr>\n            <th colspan=\"2\">\n              <b>Sodium</b>\n              ${context.Sodium.value}${context.Sodium.unit}\n            </th>\n            <td>\n            <b>${Math.ceil(context.Sodium.value / dailyValue.sodium * 100)}%</b>\n            </td>\n          </tr>\n          <tr>\n            <th colspan=\"2\">\n              <b>Total Carbohydrate</b>\n              ${context['Total Carbohydrate'].value}${context['Total Carbohydrate'].unit}\n            </th>\n            <td>\n            <b>${Math.ceil(context['Total Carbohydrate'].value / dailyValue.totalCarbohydrate * 100)}%</b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"blank-cell\">\n            </td>\n            <th>\n              Dietary Fiber\n              ${context['Dietary Fiber'].value}${context['Dietary Fiber'].unit}\n            </th>\n            <td>\n            <b>${Math.ceil(context['Dietary Fiber'].value / dailyValue.dietaryFiber * 100)}%</b>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"blank-cell\">\n            </td>\n            <th>\n              Sugars\n              ${context.Sugars.value}${context.Sugars.unit}\n            </th>\n            <td>\n            </td>\n          </tr>\n          <tr class=\"thick-end\">\n            <th colspan=\"2\">\n              <b>Protein</b>\n              ${context.Protein.value}${context.Protein.unit}\n            </th>\n            <td>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <table class=\"performance-facts__table--grid\">\n        <tbody>\n          <tr>\n            <td colspan=\"2\">\n              Vitamin A\n              ${Math.ceil(context['Vitamin A'].value / dailyValue.vitaminA * 100)}%\n            </td>\n            <td>\n              Vitamin C\n              ${Math.ceil(context['Vitamin C'].value / dailyValue.vitaminC * 100)}%\n            </td>\n          </tr>\n          <tr class=\"thin-end\">\n            <td colspan=\"2\">\n              Calcium\n              ${Math.ceil(context.Calcium.value / dailyValue.calcium * 100)}%\n            </td>\n            <td>\n              Iron\n              ${Math.ceil(context.Iron.value / dailyValue.iron * 100)}%\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <p class=\"small-info\">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or\n        lower depending on your calorie needs:</p>\n      <table class=\"performance-facts__table--small small-info\">\n        <thead>\n          <tr>\n            <td colspan=\"2\"></td>\n            <th>Calories:</th>\n            <th>2,000</th>\n            <th>2,500</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th colspan=\"2\">Total Fat</th>\n            <td>Less than</td>\n            <td>65g</td>\n            <td>80g</td>\n          </tr>\n          <tr>\n            <td class=\"blank-cell\"></td>\n            <th>Saturated Fat</th>\n            <td>Less than</td>\n            <td>20g</td>\n            <td>25g</td>\n          </tr>\n          <tr>\n            <th colspan=\"2\">Cholesterol</th>\n            <td>Less than</td>\n            <td>300mg</td>\n            <td>300 mg</td>\n          </tr>\n          <tr>\n            <th colspan=\"2\">Sodium</th>\n            <td>Less than</td>\n            <td>2,400mg</td>\n            <td>2,400mg</td>\n          </tr>\n          <tr>\n            <th colspan=\"3\">Total Carbohydrate</th>\n            <td>300g</td>\n            <td>375g</td>\n          </tr>\n          <tr>\n            <td class=\"blank-cell\"></td>\n            <th colspan=\"2\">Dietary Fiber</th>\n            <td>25g</td>\n            <td>30g</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class=\"small-info\">\n        Calories per gram:\n      </p>\n      <p class=\"small-info text-center\">\n        Fat 9\n        •\n        Carbohydrate 4\n        •\n        Protein 4\n      </p>\n    </section>`;\n};\n\nexports.label = label;\n\n//# sourceURL=webpack:///./src/food-label-template.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _foodLabelTemplate = __webpack_require__(/*! ./food-label-template */ \"./src/food-label-template.js\");\n\nconst API_KEY = 'KJcLpsEHn1PkRBnZLa5825iT94JQOhaSSwEa2xry';\nconst BASE_REQUEST_URL = 'https://api.nal.usda.gov/ndb/';\n// 'https://api.nal.usda.gov/ndb/V2/reports?'\nconst DEFAULT_OPTIONS = Object.freeze({\n  responseFormat: 'json',\n  sortType: 'r',\n  maxResults: 10,\n  startAtIndex: 0\n});\n\n// Todo: make this configurable\nconst UIContainer = document.getElementById('FoodSelect');\nconst inputElement = document.getElementById('Query');\nconst selectElement = UIContainer.querySelector('select');\nconst labelWrapper = document.getElementById('LabelWrapper');\nconst defaultSelectHTML = '<option value=\"default\" selected>Waiting for your search</option>';\n\nclass FoodCompare {\n  constructor(options) {\n    const { responseFormat, sortType, maxResults, startAtIndex } = Object.assign({}, DEFAULT_OPTIONS, options);\n    this.responseFormat = responseFormat;\n    this.sortType = sortType;\n    this.maxResults = maxResults;\n    this.startAtIndex = startAtIndex;\n\n    selectElement.innerHTML = defaultSelectHTML;\n\n    let inputTypingTimeout = null;\n    inputElement.addEventListener('keyup', () => {\n      if (inputTypingTimeout) {\n        clearTimeout(inputTypingTimeout);\n      }\n      inputTypingTimeout = setTimeout(() => {\n        this.search(inputElement.value);\n      }, 500);\n    });\n  }\n\n  async search(searchTerm) {\n    selectElement.disabled = true;\n\n    if (!searchTerm) {\n      throw new Error('Missing searchTerm in query.');\n    }\n\n    selectElement.innerHTML = '<option value=\"default\">Loading...</option>';\n    const searchResults = await this.getFoodItemsForSearchTerm(searchTerm);\n    if (searchResults.errors) {\n      selectElement.innerHTML = defaultSelectHTML;\n      throw new Error(`Found no results for ${searchTerm}`);\n    }\n\n    this.buildFoodOptionsSelect(searchResults);\n    selectElement.addEventListener('change', async evt => {\n      this.foodItemNumber = evt.currentTarget.value;\n      if (this.foodItemNumber === 'default') {\n        return;\n      }\n\n      const nutrientInfo = await this.getNutritionInfo(this.foodItemNumber);\n      const parsedInfo = this.parseNutrientInfoForLabel(nutrientInfo.foods[0].food.nutrients);\n\n      const labelContext = Object.values(parsedInfo).reduce((acc, nut) => {\n        acc[nut.label] = nut.info;\n        return acc;\n      }, {});\n\n      labelWrapper.innerHTML = (0, _foodLabelTemplate.label)(labelContext);\n    });\n  }\n\n  async getFoodItemsForSearchTerm(searchTerm) {\n    const url = this.getFoodQueryURL({ searchTerm });\n    const searchResults = await this.fetchSearchResults(url);\n    return searchResults;\n  }\n\n  async fetchSearchResults(url) {\n    const response = await fetch(url);\n    const data = await response.json();\n\n    return data;\n  }\n\n  getFoodQueryURL({\n    searchTerm\n  }) {\n    const encodedSearchTerm = encodeURI(searchTerm);\n    return BASE_REQUEST_URL + 'search/' + '?format=' + this.responseFormat + '&sort=' + this.sortType + '&max=' + this.maxResults + '&offset=' + this.startAtIndex + '&ds=Standard%20Reference' + '&q=' + encodedSearchTerm + '&api_key=' + API_KEY;\n  }\n\n  buildFoodOptionsSelect(searchResults) {\n    const options = searchResults.list.item.reduce((acc, food) => {\n      acc += `<option value='${food.ndbno}'>${food.name}</option>`;\n      return acc;\n    }, '<option value=\"default\" selected>Choose a food from the results</option>');\n    selectElement.innerHTML = options;\n    selectElement.disabled = false;\n    return {\n      UIContainer,\n      selectElement\n    };\n  }\n\n  async getNutritionInfo(foodNumber) {\n    const url = this.getFoodReportURL(foodNumber);\n    const foodInfo = await this.fetchSearchResults(url);\n    return foodInfo;\n  }\n\n  getFoodReportURL(foodNumber) {\n    return BASE_REQUEST_URL + '/V2/reports' + '?ndbno=' + foodNumber + '&type=b' + '&format=json' + '&api_key=' + API_KEY;\n  }\n\n  parseNutrientInfoForLabel(nutrientInfo) {\n    const measuredNutrients = {\n      'Energy': {\n        label: 'Calories',\n        info: {}\n      },\n      'Total lipid (fat)': {\n        label: 'Total Fat',\n        info: {}\n      },\n      'Fatty acids, total saturated': {\n        label: 'Saturated Fat',\n        info: {}\n      },\n      'Fatty acids, total trans': {\n        label: 'Trans Fat',\n        info: {}\n      },\n      'Cholesterol': {\n        label: 'Cholesterol',\n        info: {}\n      },\n      'Sodium, Na': {\n        label: 'Sodium',\n        info: {}\n      },\n      'Carbohydrate, by difference': {\n        label: 'Total Carbohydrate',\n        info: {}\n      },\n      'Fiber, total dietary': {\n        label: 'Dietary Fiber',\n        info: {}\n      },\n      'Sugars, total': {\n        label: 'Sugars',\n        info: {}\n      },\n      'Protein': {\n        label: 'Protein',\n        info: {}\n      },\n      'Vitamin A, IU': {\n        label: 'Vitamin A',\n        info: {}\n      },\n      'Vitamin C, total ascorbic acid': {\n        label: 'Vitamin C',\n        info: {}\n      },\n      'Calcium, Ca': {\n        label: 'Calcium',\n        info: {}\n      },\n      'Iron, Fe': {\n        label: 'Iron',\n        info: {}\n      }\n    };\n\n    Object.keys(measuredNutrients).forEach(nutrient => {\n      measuredNutrients[nutrient].info = this.getNutrientMeasures(nutrientInfo.find(type => type.name === nutrient));\n    });\n    return measuredNutrients;\n  }\n\n  getNutrientMeasures(nutrient) {\n    if (!nutrient) {\n      return {\n        name: nutrient,\n        value: 0,\n        unit: 'g',\n        quantity: null,\n        label: null\n      };\n    }\n    return {\n      name: nutrient.name,\n      value: nutrient.value,\n      unit: nutrient.unit,\n      quantity: nutrient.measures[0].qty,\n      label: nutrient.measures[0].label\n    };\n  }\n}\n\nconst foodCompare = new FoodCompare();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });