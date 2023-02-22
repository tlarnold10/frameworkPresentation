<script>
import axios from 'axios';
import { interpret } from 'xstate';
import { toggleMachine, useToggleMachine } from '../state/state.ts';

export default {
    setup() {
      const { state, send } = useToggleMachine();
      return {
        state,
        send
      };
    },
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
            numberOfRecords: 0,
            toggleService: interpret(toggleMachine),
            current: toggleMachine.initialState
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
        },
        addToDailyTracker(recipe) {
          this.send({ type: 'ADD', payload: recipe })
        }
    },
    mounted () {
        console.log("Mounting");
    }
}
</script>
    
<template>
    <h1>Nutrition Form</h1>
    <div style="width:40%; margin:15px">
      <q-form class="q-gutter-md">
          <q-input filled v-model="maxProtein" label="Max Protein"/>
          <q-input filled v-model="minProtein" label="Min Protein"/>
          <q-input filled v-model="maxFat" label="Max Fat"/>
          <q-input filled v-model="minFat" label="Min Fat"/>
          <q-input filled v-model="maxCarbs" label="Max Carbs"/>
          <q-input filled v-model="minCarbs" label="Min Carbs"/>
          <q-input filled v-model="maxCalories" label="Max Calories"/>
          <q-input filled v-model="minCalories" label="Min Calories"/>
          <q-input filled v-model="numberOfRecords" label="Number of Records"/>
          <q-btn color="primary" label="Submit" @click="submit"/>
      </q-form>
    </div>

    <q-markup-table v-if="!isLoading">
        <thead>
            <tr>
                <td>Title</td>
                <td>Protein</td>
                <td>Fat</td>
                <td>Carbs</td>
                <td>Calories</td>
                <td>Add to Daily Tracker</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in recipes" :key="index">
                <td>{{ item.title }}</td>
                <td>{{ item.protein }}</td>
                <td>{{ item.fat }}</td>
                <td>{{ item.carbs }}</td>
                <td>{{ item.calories }}</td>
                <td><q-btn v-on:click="addToDailyTracker(item)" color="primary" label="ADD"/></td>
            </tr>
        </tbody>
    </q-markup-table>
</template>

<style>
td {
    padding: 15px;
}
</style>