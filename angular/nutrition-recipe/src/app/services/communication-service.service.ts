import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../models/recipie.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  public $dailyRecipe = new BehaviorSubject([] as Recipe[]);
  private _listOfRecipes: Recipe[] = []

  constructor() { }

  public getDailyRecipes() {
    return this.$dailyRecipe.asObservable();
  }

  public addDailyRecipe(recipe: Recipe) {
    this._listOfRecipes.push(recipe);
    this.$dailyRecipe.next(this._listOfRecipes);
  }

  public removeFromDaily(recipe: Recipe) {
    this._listOfRecipes = this._listOfRecipes.filter((x) => x !== recipe);
    this.$dailyRecipe.next(this._listOfRecipes);
  }
}
