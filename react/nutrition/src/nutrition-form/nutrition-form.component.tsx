import React, { useState } from 'react';
import { Recipe } from './recipe.model';
import { Nutrition } from './nutrition-form.model';

class NutritionForm extends React.Component<{}, { recipes: Recipe[], nutritionInput: Nutrition }> {

    testVar: string = "Hello world";

    constructor(props: any) {
      super(props);
      this.state = {
        recipes: [],
        nutritionInput: {
          minProtein: 0,
          maxProtein: 0,
          minFat: 0,
          maxFat: 0,
          minCarbs: 0,
          maxCarbs: 0,
          minCalories: 0,
          maxCalories: 0,
          numberOfRecords: 0,
        }
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: any) {
      const target = event.target;
      const name = target.name;
    }
    
    handleSubmit(event: any) {
      this.setState({ nutritionInput: event.target.value });
      
      fetch(this.generateUrl())
        .then(response => response.json())
        .then(data => this.setState({ recipes: data}));
    }

    private generateUrl(): string {
      var apiUrl: string = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=8989350b92c448b890ada075143c8d0a" 
      if (this.state.nutritionInput.minProtein > 0) {
        apiUrl = apiUrl + "&minProtein=" + this.state.nutritionInput.minProtein;
      }
      if (this.state.nutritionInput.maxProtein > 0) {
        apiUrl = apiUrl + "&maxProtein=" + this.state.nutritionInput.maxProtein;
      }
      if (this.state.nutritionInput.minFat > 0) {
        apiUrl = apiUrl + "&minFat=" + this.state.nutritionInput.minFat;
      }
      if (this.state.nutritionInput.maxFat > 0) {
        apiUrl = apiUrl + "&maxFat=" + this.state.nutritionInput.maxFat;
      }
      if (this.state.nutritionInput.minCarbs > 0) {
        apiUrl = apiUrl + "&minCarbs=" + this.state.nutritionInput.minCarbs;
      }
      if (this.state.nutritionInput.maxCarbs > 0) {
        apiUrl = apiUrl + "&maxCarbs=" + this.state.nutritionInput.maxCarbs;
      }
      if (this.state.nutritionInput.minCalories > 0) {
        apiUrl = apiUrl + "&minCalories=" + this.state.nutritionInput.minCalories;
      }
      if (this.state.nutritionInput.maxCalories > 0) {
        apiUrl = apiUrl + "&maxCalories=" + this.state.nutritionInput.maxCalories;
      }
      if (this.state.nutritionInput.numberOfRecords > 0) {
        apiUrl = apiUrl + "&numberOfRecords=" + this.state.nutritionInput.numberOfRecords;
      }
      else {
        apiUrl = apiUrl + "&numberOfRecords=10";
      }
      return apiUrl;
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Min Protein: </label>
              <input type="number" name="nutritionInput.minProtein" value={this.state.nutritionInput.minProtein} onChange={this.handleInputChange}/>
            <button type='submit' value="Submit">Submit</button>
          </form>
          <ul>
            {this.state.recipes.map(recipe => (
              <li>{recipe.title}</li>
            ))}
          </ul>
        </div>
      )
    }
}
  
export default NutritionForm;