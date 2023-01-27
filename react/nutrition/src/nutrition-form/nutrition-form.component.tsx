import React, { useState } from 'react';
import { Recipe } from './recipe.model';
import { Nutrition } from './nutrition-form.model';
import './nutrition-form.css'

const NutritionForm = () => {
    console.log("help");
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [nutritionInput, setNutritionInput] = useState<Nutrition>({
      minProtein: 0,
      maxProtein: 0,
      minFat: 0,
      maxFat: 0,
      minCarbs: 0,
      maxCarbs: 0,
      minCalories: 0,
      maxCalories: 0,
      numberOfRecords: 0,
    });

    const handleChange = (event: any) => {
      var value = event.target.value;
      var name = event.target.name;
      setNutritionInput({
        ...nutritionInput, [name]: value
      });
    }

    const handleSubmit = (event: any) => {
      alert(nutritionInput.minProtein + nutritionInput.numberOfRecords);
    }

    const generateUrl = () => {
      var apiUrl: string = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=8989350b92c448b890ada075143c8d0a" 
      if (nutritionInput.minProtein > 0) {
        apiUrl = apiUrl + "&minProtein=" + nutritionInput.minProtein;
      }
      if (nutritionInput.maxProtein > 0) {
        apiUrl = apiUrl + "&maxProtein=" + nutritionInput.maxProtein;
      }
      if (nutritionInput.minFat > 0) {
        apiUrl = apiUrl + "&minFat=" + nutritionInput.minFat;
      }
      if (nutritionInput.maxFat > 0) {
        apiUrl = apiUrl + "&maxFat=" + nutritionInput.maxFat;
      }
      if (nutritionInput.minCarbs > 0) {
        apiUrl = apiUrl + "&minCarbs=" + nutritionInput.minCarbs;
      }
      if (nutritionInput.maxCarbs > 0) {
        apiUrl = apiUrl + "&maxCarbs=" + nutritionInput.maxCarbs;
      }
      if (nutritionInput.minCalories > 0) {
        apiUrl = apiUrl + "&minCalories=" + nutritionInput.minCalories;
      }
      if (nutritionInput.maxCalories > 0) {
        apiUrl = apiUrl + "&maxCalories=" + nutritionInput.maxCalories;
      }
      if (nutritionInput.numberOfRecords > 0) {
        apiUrl = apiUrl + "&numberOfRecords=" + nutritionInput.numberOfRecords;
      }
      else {
        apiUrl = apiUrl + "&numberOfRecords=10";
      }
      return apiUrl;
    }

    return (
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label>Min Protein: </label>
            <input type="number" name="minProtein" onChange={handleChange}/><br/>
          <label>Max Protein: </label>
            <input type="number" name="maxProtein" onChange={handleChange}/><br/>
          <label>Min Fat: </label>
            <input type="number" name="minProtein" onChange={handleChange}/><br/>
          <label>Max Fat: </label>
            <input type="number" name="maxFat" onChange={handleChange}/><br/>
          <label>Min Carbs: </label>
            <input type="number" name="minCarbs" onChange={handleChange}/><br/>
          <label>Max Carbs: </label>
            <input type="number" name="maxCarbs" onChange={handleChange}/><br/>
          <label>Min Calories: </label>
            <input type="number" name="minCalories" onChange={handleChange}/><br/>
          <label>Max Calories: </label>
            <input type="number" name="maxCalories" onChange={handleChange}/><br/>
          <label>Number of Records: </label>
            <input type="number" name="numberOfRecords" onChange={handleChange}/><br/>
          <button type='submit' value="Submit">Submit</button>
        </form>
        <ul>
          {recipes.map(recipe => (
            <li>{recipe.title}</li>
          ))}
        </ul>
      </div>
    )
    
  
  }

  
export default NutritionForm;