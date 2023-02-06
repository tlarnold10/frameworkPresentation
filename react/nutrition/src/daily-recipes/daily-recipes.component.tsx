import { useSelector } from "react-redux";
import { Recipe } from '../nutrition-form/recipe.model';
import { Table, ListItem, TextField, Button, TableHead, TableBody, TableRow, TableCell  } from '@mui/material';

const DailyRecipes = (props: any) => {
    const state = useSelector((state: any) => state);
    var dailyRecipesList: Recipe[] = []
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
                    </TableRow>
                  ))}
                  </TableBody>
                </Table>
            </div>
        );
    }

};

export default DailyRecipes;