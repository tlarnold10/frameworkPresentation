import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipie.model';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';

@Component({
  selector: 'app-daily-nutrition',
  templateUrl: './daily-nutrition.component.html',
  styleUrls: ['./daily-nutrition.component.scss']
})
export class DailyNutritionComponent implements OnInit {
  public listOfDailyRecipes: Recipe[] = [];
  public totalCalories = 0;
  public totalFat = 0;
  public totalCarbs = 0;
  public totalProtein = 0;
  constructor(private _communicationService: CommunicationServiceService) {  }

  ngOnInit(): void {
    this._communicationService.getDailyRecipes()
      .subscribe((recipes) => {
        this.totalCalories = 0;
        this.totalCarbs = 0;
        this.totalFat = 0;
        this.totalProtein = 0;
        this.listOfDailyRecipes = recipes;
        for (var recipe of this.listOfDailyRecipes) {
          this.totalCalories = this.totalCalories + recipe.calories;
          this.totalFat = this.totalFat + Number(recipe.fat.substring(0, recipe.fat.length - 1));
          this.totalCarbs = this.totalCarbs + Number(recipe.carbs.substring(0, recipe.carbs.length - 1));
          this.totalProtein = this.totalProtein + Number(recipe.protein.substring(0, recipe.protein.length - 1));
        }
        console.log(this.listOfDailyRecipes);
      })
  }

  public removeFromDaily(recipe: Recipe) {
    this._communicationService.removeFromDaily(recipe);
  }

}
