import { Component, OnInit } from '@angular/core';
import { Nutrition } from 'src/app/models/nutrition.model';
import { Recipe } from 'src/app/models/recipie.model';
import { CommunicationServiceService } from 'src/app/services/communication-service.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipes: Recipe[] = [];
  loading: boolean = true;
  nutrition: Nutrition = {
    minProtein: 0,
    maxProtein: 0,
    minFat: 0,
    maxFat: 0,
    minCarbs: 0,
    maxCarbs: 0,
    minCalories: 0,
    maxCalories: 0,
    numberOfRecords: 0,
  };

  constructor(private _httpService: HttpServiceService, private _communicationService: CommunicationServiceService) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.nutrition);
    this._httpService.getAll(this.nutrition)
      .subscribe((items) => {
        this.recipes = items;
        this.loading = false;
        console.log(this.recipes);
      });
  }

  public addToDaily(recipe: any) {
    console.log(recipe);
    this._communicationService.addDailyRecipe(recipe);
  }
}
