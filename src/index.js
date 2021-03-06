import { label, } from './food-label-template'

const API_KEY = 'KJcLpsEHn1PkRBnZLa5825iT94JQOhaSSwEa2xry'
const BASE_REQUEST_URL = 'https://api.nal.usda.gov/ndb/'
// 'https://api.nal.usda.gov/ndb/V2/reports?'
const DEFAULT_OPTIONS = Object.freeze({
  responseFormat: 'json',
  sortType: 'r',
  maxResults: 10,
  startAtIndex: 0,
})

// Todo: make this configurable
const UIContainer = document.getElementById('FoodSelect')
const inputElement = document.getElementById('Query')
const selectElement = UIContainer.querySelector('select')
const labelWrapper = document.getElementById('LabelWrapper')
const defaultSelectHTML = '<option value="default" selected>Waiting for your search</option>'

class FoodCompare {
  constructor(options) {
    const { responseFormat, sortType, maxResults, startAtIndex, } = Object.assign({}, DEFAULT_OPTIONS, options)
    this.responseFormat = responseFormat
    this.sortType = sortType
    this.maxResults = maxResults
    this.startAtIndex = startAtIndex

    selectElement.innerHTML = defaultSelectHTML

    let inputTypingTimeout = null
    inputElement.addEventListener('keyup', () => {
      if (inputTypingTimeout) {
        clearTimeout(inputTypingTimeout)
      }
      inputTypingTimeout = setTimeout(() => {
        this.search(inputElement.value)
      }, 500)
    })
  }

  async search(searchTerm) {
    selectElement.disabled = true

    if (!searchTerm) {
      throw new Error('Missing searchTerm in query.')
    }

    selectElement.innerHTML = '<option value="default">Loading...</option>'
    const searchResults = await this.getFoodItemsForSearchTerm(searchTerm)
    if (searchResults.errors) {
      selectElement.innerHTML = defaultSelectHTML
      throw new Error(`Found no results for ${searchTerm}`)
    }

    this.buildFoodOptionsSelect(searchResults)
    selectElement.addEventListener('change', async (evt) => {
      this.foodItemNumber = evt.currentTarget.value
      if (this.foodItemNumber === 'default') {
        return
      }

      const nutrientInfo = await this.getNutritionInfo(this.foodItemNumber)
      const parsedInfo = this.parseNutrientInfoForLabel(nutrientInfo.foods[0].food.nutrients)

      const labelContext = Object.values(parsedInfo).reduce((acc, nut) => {
        acc[nut.label] = nut.info
        return acc
      }, {})

      labelWrapper.innerHTML = label(labelContext)
    })
  }

  async getFoodItemsForSearchTerm(searchTerm) {
    const url = this.getFoodQueryURL({ searchTerm, })
    const searchResults = await this.fetchSearchResults(url)
    return searchResults
  }

  async fetchSearchResults(url) {
    const response = await fetch(url)
    const data = await response.json()

    return data
  }

  getFoodQueryURL({
    searchTerm,
  }) {
    const encodedSearchTerm = encodeURI(searchTerm)
    return BASE_REQUEST_URL + 'search/' +
      '?format=' + this.responseFormat +
      '&sort=' + this.sortType +
      '&max=' + this.maxResults +
      '&offset=' + this.startAtIndex +
      '&ds=Standard%20Reference' +
      '&q=' + encodedSearchTerm +
      '&api_key=' + API_KEY
  }

  buildFoodOptionsSelect(searchResults) {
    const options = searchResults.list.item.reduce((acc, food) => {
      acc += `<option value='${food.ndbno}'>${food.name}</option>`
      return acc
    }, '<option value="default" selected>Choose a food from the results</option>')
    selectElement.innerHTML = options
    selectElement.disabled = false
    return {
      UIContainer,
      selectElement,
    }
  }

  async getNutritionInfo(foodNumber) {
    const url = this.getFoodReportURL(foodNumber)
    const foodInfo = await this.fetchSearchResults(url)
    return foodInfo
  }

  getFoodReportURL(foodNumber) {
    return BASE_REQUEST_URL + '/V2/reports' +
      '?ndbno=' + foodNumber +
      '&type=b' +
      '&format=json' +
      '&api_key=' + API_KEY
  }

  parseNutrientInfoForLabel(nutrientInfo) {
    const measuredNutrients = {
      'Energy': {
        label: 'Calories',
        info: {},
      },
      'Total lipid (fat)': {
        label: 'Total Fat',
        info: {},
      },
      'Fatty acids, total saturated': {
        label: 'Saturated Fat',
        info: {},
      },
      'Fatty acids, total trans': {
        label: 'Trans Fat',
        info: {},
      },
      'Cholesterol': {
        label: 'Cholesterol',
        info: {},
      },
      'Sodium, Na': {
        label: 'Sodium',
        info: {},
      },
      'Carbohydrate, by difference': {
        label: 'Total Carbohydrate',
        info: {},
      },
      'Fiber, total dietary': {
        label: 'Dietary Fiber',
        info: {},
      },
      'Sugars, total': {
        label: 'Sugars',
        info: {},
      },
      'Protein': {
        label: 'Protein',
        info: {},
      },
      'Vitamin A, IU': {
        label: 'Vitamin A',
        info: {},
      },
      'Vitamin C, total ascorbic acid': {
        label: 'Vitamin C',
        info: {},
      },
      'Calcium, Ca': {
        label: 'Calcium',
        info: {},
      },
      'Iron, Fe': {
        label: 'Iron',
        info: {},
      },
    }

    Object.keys(measuredNutrients).forEach(nutrient => {
      measuredNutrients[nutrient].info = this.getNutrientMeasures(nutrientInfo.find(type => type.name === nutrient))
    })
    return measuredNutrients
  }

  getNutrientMeasures(nutrient) {
    if (!nutrient) {
      return {
        name: nutrient,
        value: 0,
        unit: 'g',
        quantity: null,
        label: null,
      }
    }
    return {
      name: nutrient.name,
      value: nutrient.value,
      unit: nutrient.unit,
      quantity: nutrient.measures[0].qty,
      label: nutrient.measures[0].label,
    }
  }
}

const foodCompare = new FoodCompare()