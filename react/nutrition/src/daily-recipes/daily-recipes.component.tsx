import { useSelector } from "react-redux";
import { Recipe } from '../nutrition-form/recipe.model';
import { Table, ListItem, TextField, Button, TableHead, TableBody, TableRow, TableCell  } from '@mui/material';

const DailyRecipes = (props: any) => {
    const state = useSelector((state: any) => state);
    var dailyRecipesList: Recipe[] = [];
    var totalCalories: number = 0;
    var totalCarbs: number = 0;
    var totalFats: number = 0;
    var totalProtein: number = 0;
    
    const removeFood = (food: Recipe) => {
      console.log(food);
      props.onRemoveRecipe(food);
      calculateTotals();
    }

    const calculateTotals = () => {
      for (var food of dailyRecipesList) {
        totalCalories = totalCalories + Number(food.calories);
        totalCarbs = totalCarbs + Number(food.carbs.substring(0, food.carbs.length - 1));
        totalFats = totalFats + Number(food.fat.substring(0, food.fat.length - 1));
        totalProtein = totalProtein + Number(food.protein.substring(0, food.protein.length - 1));
      }
    }

    if (state.daily.items !== undefined) {
        dailyRecipesList = state.daily.items;
    }
    if (dailyRecipesList.length === 0) {
        return (
            <div>
                Please add a recipe to your daily food planner. 
            </div>
        );
    }
    else {
      calculateTotals();
      return (
          <div>
              <h2>Daily Meal Plan: </h2>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Calories</TableCell>
                    <TableCell>Fat&nbsp;(g)</TableCell>
                    <TableCell>Carbs&nbsp;(g)</TableCell>
                    <TableCell>Protein&nbsp;(g)</TableCell>
                    <TableCell>Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {dailyRecipesList.map(food => (
                  <TableRow>
                    <TableCell>{food.title}</TableCell>
                    <TableCell>{food.calories}</TableCell>
                    <TableCell>{food.fat}</TableCell>
                    <TableCell>{food.carbs}</TableCell>
                    <TableCell>{food.protein}</TableCell>
                    <TableCell><Button onClick={() => removeFood(food)}>Remove</Button></TableCell>
                  </TableRow>
                ))}
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>{totalCalories}</TableCell>
                    <TableCell>{totalFats}</TableCell>
                    <TableCell>{totalCarbs}</TableCell>
                    <TableCell>{totalProtein}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>
      );
    }
};

export default DailyRecipes;