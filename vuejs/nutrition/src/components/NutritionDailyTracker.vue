<script>

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
            dailyTracking: [],
            totalCalories: 0,
            totalFat: 0,
            totalProtein: 0,
            totalCarbs: 0,
            toggleService: interpret(toggleMachine),
            current: toggleMachine.initialState,
            // context: toggleMachine.context
        }
    },
    methods: {
        removeFromDailyTracker(recipe) {
            this.send({ type: 'REMOVE', payload: recipe })
        }
    },
    mounted () {
        console.log("Mounted Daily Tracker");
    }
}
</script>
    
<template>
    <h1>Nutrition Daily Tracker</h1>
    <q-markup-table v-if="!isLoading">
        <thead>
            <tr>
                <td>Title</td>
                <td>Protein</td>
                <td>Fat</td>
                <td>Carbs</td>
                <td>Calories</td>
                <td>Remove from Daily Tracker</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in state.context.dailyTracker" :key="index">
                <td>{{ item.title }}</td>
                <td>{{ item.protein }}</td>
                <td>{{ item.fat }}</td>
                <td>{{ item.carbs }}</td>
                <td>{{ item.calories }}</td>
                <td><q-btn v-on:click="removeFromDailyTracker(item)" color="primary" label="REMOVE"/></td>
            </tr>
            <tr>
                <td><strong>TOTALS</strong></td>
                <td><strong>{{ state.context.totalProtein }}</strong></td>
                <td><strong>{{ state.context.totalFat }}</strong></td>
                <td><strong>{{ state.context.totalCarbs }}</strong></td>
                <td><strong>{{ state.context.totalCalories }}</strong></td>
            </tr>
        </tbody>
    </q-markup-table>
</template>

<style>

</style>