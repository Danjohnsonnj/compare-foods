const API_KEY = 'KJcLpsEHn1PkRBnZLa5825iT94JQOhaSSwEa2xry'
const BASE_REQUEST_URL = 'https://api.nal.usda.gov/ndb/'
// 'https://api.nal.usda.gov/ndb/V2/reports?'
const DEFAULT_OPTIONS = Object.freeze({
  responseFormat: 'json',
  sortType: 'r',
  maxResults: 10,
  startAtIndex: 0,
})

class FoodCompare {
  constructor(options) {
    const { responseFormat, sortType, maxResults, startAtIndex, } = Object.assign({}, DEFAULT_OPTIONS, options)
    this.responseFormat = responseFormat
    this.sortType = sortType
    this.maxResults = maxResults
    this.startAtIndex = startAtIndex
  }

  async search(searchTerm) {
    if (!searchTerm) {
      throw new Error('Missing searchTerm in query.')
    }

    const searchResults = await this.getFoodItemsForSearchTerm(searchTerm)
    const { selectElement, } = this.buildFoodOptionsSelect(searchResults)
    selectElement.addEventListener('change', async (evt) => {
      this.foodItemNumber = evt.currentTarget.value
      console.log(this.foodItemNumber)
      this.getNutritionInfo(this.foodItemNumber).then(info => {
        this.parseNutrientInfoForLabel(info.foods[0].food.nutrients)
      })
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
    const UIContainer = document.getElementById('FoodSelect')
    const selectElement = UIContainer.querySelector('select')

    searchResults.list.item.forEach((food) => {
      const option = document.createElement('option')
      option.innerHTML = food.name
      option.value = food.ndbno
      selectElement.appendChild(option)
    })

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
      'Calories': 'Energy',
      'Total Fat': "Total lipid (fat)",
      'Saturated Fat': 'Fatty acids, total saturated',
      'Fatty acids, total monounsaturated',
      'Fatty acids, total polyunsaturated',
      'Cholesterol',
      'Sodium, Na',
      'Carbohydrate, by difference',
      'Fiber, total dietary',
      'Sugars, total',
      'Protein',
      'Vitamin A, IU',
      'Vitamin C, total ascorbic acid',
      'Calcium, Ca',
      'Iron, Fe',
    }
    const calories = this.getNutrientMeasures(nutrientInfo.find(type => type.name === 'Energy'))
    console.log(calories)
    console.log(nutrientInfo)
  }

  getNutrientMeasures(nutrient) {
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
foodCompare.search('peanut butter')