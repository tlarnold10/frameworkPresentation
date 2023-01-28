import React, { useState } from 'react';
import { Recipe } from './recipe.model';
import { Nutrition } from './nutrition-form.model';
import { List, Box, TextField, Button  } from '@mui/material';
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
          <TextField className='inputField' type="number" name="minProtein" label="Min Protein" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="maxProtein" label="Max Protein" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="minFat" label="Min Fat" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="maxFat" label="Max Fat" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="minCarbs" label="Min Carbs" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="maxCarbs" label="Max Carbs" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="minCalories" label="Min Calories" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="maxCalories" label="Max Calories" onChange={handleChange}/><br/>
          <TextField className='inputField' type="number" name="numberOfRecords" label="Number of Records" onChange={handleChange}/><br/>
          <Button className='submitButton' variant="contained" type='submit' value="Submit">Submit</Button>
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