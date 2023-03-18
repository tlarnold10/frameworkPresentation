import { Nutrition } from '@/models/Nutrition.model';
import { Recipe } from '@/models/Recipe.model';
import { useEffect, useState } from 'react';

export default function NutritionForm(props: any) {
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
    const [dailyRecipesList, setDailyRecipesList] = useState<Recipe[]>([]);
    const [totalCalories, setTotalCalories] = useState<number>(0);
    const [totalCarbs, setTotalCarbs] = useState<number>(0);
    const [totalFats, setTotalFats] = useState<number>(0);
    const [totalProtein, setTotalProtein] = useState<number>(0);

    useEffect(() => {
        calculateTotals();
    })
    
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
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setRecipes(data);
        })
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

    const addRecipe = (recipe: Recipe) => {
        var newdailyRecipesList = [];
        for (var item of dailyRecipesList) {
            newdailyRecipesList.push(item);
        }
        newdailyRecipesList.push(recipe);
        console.log(newdailyRecipesList);
        setDailyRecipesList(newdailyRecipesList);
    }

    const removeFood = (food: Recipe) => {
        var newdailyRecipesList = [];
        for (var item of dailyRecipesList) {
            newdailyRecipesList.push(item);
        }
        newdailyRecipesList = newdailyRecipesList.filter(x => x.id !== food.id);
        setDailyRecipesList(newdailyRecipesList);
    }

    const calculateTotals = () => {
        var newTotalCalories = 0;
        var newTotalCarbs = 0;
        var newTotalFats = 0;
        var newTotalProtein = 0;
        for (var food of dailyRecipesList) {
          newTotalCalories = newTotalCalories + Number(food.calories);
          newTotalCarbs = newTotalCarbs + Number(food.carbs.substring(0, food.carbs.length - 1));
          newTotalFats = newTotalFats + Number(food.fat.substring(0, food.fat.length - 1));
          newTotalProtein = newTotalProtein + Number(food.protein.substring(0, food.protein.length - 1));
        }
        setTotalCalories(newTotalCalories);
        setTotalCarbs(newTotalCarbs);
        setTotalFats(newTotalFats);
        setTotalProtein(newTotalProtein);
    }

    return (
      <div className='container'>
        <h2 className="text-3xl font-bold underline">Nutrition Constraints:</h2>
        <form onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Min Protein
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="minProtein" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Max Protein
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="maxProtein" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Min Fat
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="minFat" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Max Fat
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="maxFat" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Min Carbs
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="minCarbs" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Max Carbs
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="maxCarbs" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Max Carbs
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="maxCarbs" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Min Calories
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="minCalories" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Max Calories
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="maxCalories" onChange={handleChange}/>
                </div>
                <div className="md:w-1/3">
                   <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                     Number of Records
                   </label>
                </div>
                <div className="md:w-2/3">
                   <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name="numberOfRecords" onChange={handleChange}/>
                </div>
            </div>
          <button className='btn btn-blue' type='submit' value="Submit">Submit</button>
        </form>
        <h2>Food Options:</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>Title</th>
              <th>Calories</th>
              <th>Fat&nbsp;(g)</th>
              <th>Carbs&nbsp;(g)</th>
              <th>Protein&nbsp;(g)</th>
              <th>Add to Day</th>
            </tr>
          </thead>
          <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td>{recipe.title}</td>
              <td>{recipe.calories}</td>
              <td>{recipe.fat}</td>
              <td>{recipe.carbs}</td>
              <td>{recipe.protein}</td>
              <td><button className='btn btn-blue' onClick={() => addRecipe(recipe)}>Add</button></td>
            </tr>
          ))}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <h2 className="text-3xl font-bold underline">Daily Summary:</h2>
        <div>
        <div>
                  <h2>Daily Meal Plan: </h2>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th>Title</th>
                        <th>Calories</th>
                        <th>Fat&nbsp;(g)</th>
                        <th>Carbs&nbsp;(g)</th>
                        <th>Protein&nbsp;(g)</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                    {dailyRecipesList.map(food => (
                      <tr key={food.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td>{food.title}</td>
                        <td>{food.calories}</td>
                        <td>{food.fat}</td>
                        <td>{food.carbs}</td>
                        <td>{food.protein}</td>
                        <td><button onClick={() => removeFood(food)}>Remove</button></td>
                      </tr>
                    ))}
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td></td>
                        <td>{totalCalories}</td>
                        <td>{totalFats}</td>
                        <td>{totalCarbs}</td>
                        <td>{totalProtein}</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
        </div>
    </div>
)
}