<script>
import axios from 'axios'

export default {
    data() {
        return {
            recipes: [],
            isLoading: true,
            maxProtein: 0,
            minProtein: 0,
            maxFat: 0,
            minFat: 0,
            maxCarbs: 0,
            minCarbs: 0,
            maxCalories: 0,
            minCalories: 0,
            numberOfRecords: 0
        }
    },
    methods: {
        submit() {
            console.log("Submitted Form")
            var nutritionUrl = this.createUrl()
            axios
                .get(nutritionUrl)
                .then(response => (this.recipes = response.data))
                .then(this.isLoading = false)
        },
        createUrl() {
            var apiUrl = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=8989350b92c448b890ada075143c8d0a"
            if (this.minProtein > 0) {
              apiUrl = apiUrl + "&minProtein=" + this.minProtein;
            }
            if (this.maxProtein > 0) {
              apiUrl = apiUrl + "&maxProtein=" + this.maxProtein;
            }
            if (this.minFat > 0) {
              apiUrl = apiUrl + "&minFat=" + this.minFat;
            }
            if (this.maxFat > 0) {
              apiUrl = apiUrl + "&maxFat=" + this.maxFat;
            }
            if (this.minCarbs > 0) {
              apiUrl = apiUrl + "&minCarbs=" + this.minCarbs;
            }
            if (this.maxCarbs > 0) {
              apiUrl = apiUrl + "&maxCarbs=" + this.maxCarbs;
            }
            if (this.minCalories > 0) {
              apiUrl = apiUrl + "&minCalories=" + this.minCalories;
            }
            if (this.maxCalories > 0) {
              apiUrl = apiUrl + "&maxCalories=" + this.maxCalories;
            }
            if (this.numberOfRecords > 0) {
              apiUrl = apiUrl + "&number=" + this.numberOfRecords;
            }
            else {
              apiUrl = apiUrl + "&number=10";
            }
            return apiUrl;
        }
    },
    mounted () {
        console.log("Mounting")
    }
}
</script>
    
<template>
    <h1>Nutrition Form</h1>

    <form>
        <label>Max Protein: </label>
        <input v-model="maxProtein">
        <br>
        <label>Min Protein: </label>
        <input v-model="minProtein">
        <br>
        <label>Max Fat: </label>
        <input v-model="maxFat">
        <br>
        <label>Min Fat: </label>
        <input v-model="minFat">
        <br>
        <label>Max Carbs: </label>
        <input v-model="maxCarbs">
        <br>
        <label>Min Carbs: </label>
        <input v-model="minCarbs">
        <br>
        <label>Max Calories: </label>
        <input v-model="maxCalories">
        <br>
        <label>Min Calories: </label>
        <input v-model="minCalories">
        <br>
        <label>Number of Records: </label>
        <input v-model="numberOfRecords">
        <br>
        <button type="button" @click="submit">Submit</button>
    </form>

    <table v-if="!isLoading">
        <thead>
            <tr>
                <td>Title</td>
                <td>Protein</td>
                <td>Fat</td>
                <td>Carbs</td>
                <td>Calories</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in recipes" :key="index">
                <td>{{ item.title }}</td>
                <td>{{ item.protein }}</td>
                <td>{{ item.fat }}</td>
                <td>{{ item.carbs }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
td {
    padding: 15px;
}
</style>