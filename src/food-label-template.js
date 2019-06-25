/*
Modified from the CodePen by the inimitable Chris Coyier,
https://chriscoyier.net/, licensed below.

Copyright (c) Chris Coyier - https://codepen.io/chriscoyier/full/egHEK

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/

const label = function(context) {
  return `<section class="performance-facts">
      <header class="performance-facts__header">
        <h1 class="performance-facts__title">Nutrition Facts</h1>
        <p>Serving Size ${context.Calories.quantity}${context.Calories.label}
        </p>
      </header>
      <table class="performance-facts__table">
        <thead>
          <tr>
            <th colspan="3" class="small-info">
              Amount Per Serving
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">
              <b>Calories</b>
              ${context.Calories.value}
            </th>
            <td>
              Calories from Fat
              ###
            </td>
          </tr>
          <tr class="thick-row">
            <td colspan="3" class="small-info">
              <b>% Daily Value*</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Fat</b>
              ${context['Total Fat'].value}${context['Total Fat'].unit}
            </th>
            <td>
              <b>##%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell">
            </td>
            <th>
              Saturated Fat
              ${context['Saturated Fat'].value}${context['Saturated Fat'].unit}
            </th>
            <td>
              <b>##%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell">
            </td>
            <th>
              Trans Fat
              ${context['Trans Fat'].value}${context['Trans Fat'].unit}
            </th>
            <td>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Cholesterol</b>
              ${context.Cholesterol.value}${context.Cholesterol.unit}
            </th>
            <td>
              <b>##%</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Sodium</b>
              ${context.Sodium.value}${context.Sodium.unit}
            </th>
            <td>
              <b>##%</b>
            </td>
          </tr>
          <tr>
            <th colspan="2">
              <b>Total Carbohydrate</b>
              ${context['Total Carbohydrate'].value}${context['Total Carbohydrate'].unit}
            </th>
            <td>
              <b>##%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell">
            </td>
            <th>
              Dietary Fiber
              ${context['Dietary Fiber'].value}${context['Dietary Fiber'].unit}
            </th>
            <td>
              <b>##%</b>
            </td>
          </tr>
          <tr>
            <td class="blank-cell">
            </td>
            <th>
              Sugars
              ${context.Sugars.value}${context['Trans Fat'].unit}
            </th>
            <td>
            </td>
          </tr>
          <tr class="thick-end">
            <th colspan="2">
              <b>Protein</b>
              ${context.Protein.value}${context.Protein.unit}
            </th>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="performance-facts__table--grid">
        <tbody>
          <tr>
            <td colspan="2">
              Vitamin A
              ${context['Vitamin A'].value}${context['Vitamin A'].unit}
            </td>
            <td>
              Vitamin C
              ${context['Vitamin C'].value}${context['Vitamin C'].unit}
            </td>
          </tr>
          <tr class="thin-end">
            <td colspan="2">
              Calcium
              ${context.Calcium.value}${context.Calcium.unit}
            </td>
            <td>
              Iron
              ${context.Iron.value}${context.Iron.unit}
            </td>
          </tr>
        </tbody>
      </table>
      <p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or
        lower depending on your calorie needs:</p>
      <table class="performance-facts__table--small small-info">
        <thead>
          <tr>
            <td colspan="2"></td>
            <th>Calories:</th>
            <th>2,000</th>
            <th>2,500</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">Total Fat</th>
            <td>Less than</td>
            <td>65g</td>
            <td>80g</td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th>Saturated Fat</th>
            <td>Less than</td>
            <td>20g</td>
            <td>25g</td>
          </tr>
          <tr>
            <th colspan="2">Cholesterol</th>
            <td>Less than</td>
            <td>300mg</td>
            <td>300 mg</td>
          </tr>
          <tr>
            <th colspan="2">Sodium</th>
            <td>Less than</td>
            <td>2,400mg</td>
            <td>2,400mg</td>
          </tr>
          <tr>
            <th colspan="3">Total Carbohydrate</th>
            <td>300g</td>
            <td>375g</td>
          </tr>
          <tr>
            <td class="blank-cell"></td>
            <th colspan="2">Dietary Fiber</th>
            <td>25g</td>
            <td>30g</td>
          </tr>
        </tbody>
      </table>
      <p class="small-info">
        Calories per gram:
      </p>
      <p class="small-info text-center">
        Fat 9
        •
        Carbohydrate 4
        •
        Protein 4
      </p>
    </section>`
}

export { label, }