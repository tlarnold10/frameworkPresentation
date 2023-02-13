<template>
  <NutritionForm msg="Welcome to Your Vue.js App"/>
  <br>
  <NutritionDailyTracker/>
</template>

<script>
import NutritionForm from './components/NutritionForm.vue'
import NutritionDailyTracker from './components/NutritionDailyTracker.vue'

export default {
  name: 'App',
  components: {
    NutritionForm,
    NutritionDailyTracker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
