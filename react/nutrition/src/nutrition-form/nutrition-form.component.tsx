import React, { useState } from 'react';
import { Recipe } from './recipe.model';
import { Nutrition } from './nutrition-form.model';
import { Table, ListItem, TextField, Button, TableHead, TableBody, TableRow, TableCell  } from '@mui/material';
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
      event.preventDefault();
      // alert(nutritionInput.minProtein + nutritionInput.numberOfRecords);
      var apiUrl = generateUrl();
      console.log(apiUrl);
      fetch(apiUrl)
        .then(response => response.json())
        // .then(data => console.log(data))
        // .then(data => recipes.map(data => recipes.push(data)))
        .then(data => setRecipes(data))
        .then(item => console.log(recipes))
        .catch(err => { console.log(err) });
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
        apiUrl = apiUrl + "&number=" + nutritionInput.numberOfRecords;
      }
      else {
        apiUrl = apiUrl + "&number=10";
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
              <TableCell>Carbs&nbsp;(g)</TableCell>
              <TableCell>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {recipes.map(recipe => (
            <TableRow>
              <TableCell>{recipe.title}</TableCell>
              <TableCell>{recipe.calories}</TableCell>
              <TableCell>{recipe.fat}</TableCell>
              <TableCell>{recipe.carbs}</TableCell>
              <TableCell>{recipe.protein}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>
    )
    
  
  }

export default NutritionForm;