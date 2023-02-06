import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DailyRecipes from './daily-recipes/daily-recipes.component'
import NutritionForm from './nutrition-form/nutrition-form.component';
import { connect } from 'react-redux';
import { useAppDispatch, useAppSelector } from './app/hooks';

export function App(props: any, state: any) {
  
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <NutritionForm onAddRecipe={onAddRecipe}/>
      <DailyRecipes items={state.items}/>
    </div>
  );

  function onAddRecipe(recipes: any) {
    dispatch({
      type: 'ADD_ITEM',
      payload: recipes
    })
  }
}



function mapStateToProps(state: any) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(App);
