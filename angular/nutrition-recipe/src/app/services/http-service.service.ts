import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Nutrition } from '../models/nutrition.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiUrl: string = '';

  constructor(private _httpClient: HttpClient) { }

  getAll(nutrition: Nutrition): Observable<any> {
    var baseUrl: string = "https://api.spoonacular.com/recipes/findByNutrients?apiKey=8989350b92c448b890ada075143c8d0a"
    this.apiUrl = baseUrl;
    if (nutrition.minProtein > 0) {
      this.apiUrl = this.apiUrl + "&minProtein=" + nutrition.minProtein;
    }
    if (nutrition.maxProtein > 0) {
      this.apiUrl = this.apiUrl + "&maxProtein=" + nutrition.maxProtein;
    }
    if (nutrition.minFat > 0) {
      this.apiUrl = this.apiUrl + "&minFat=" + nutrition.minFat;
    }
    if (nutrition.maxFat > 0) {
      this.apiUrl = this.apiUrl + "&maxFat=" + nutrition.maxFat;
    }
    if (nutrition.minCarbs > 0) {
      this.apiUrl = this.apiUrl + "&minCarbs=" + nutrition.minCarbs;
    }
    if (nutrition.maxCarbs > 0) {
      this.apiUrl = this.apiUrl + "&maxCarbs=" + nutrition.maxCarbs;
    }
    if (nutrition.minCalories > 0) {
      this.apiUrl = this.apiUrl + "&minCalories=" + nutrition.minCalories;
    }
    if (nutrition.maxCalories > 0) {
      this.apiUrl = this.apiUrl + "&maxCalories=" + nutrition.maxCalories;
    }
    if (nutrition.numberOfRecords > 0) {
      this.apiUrl = this.apiUrl + "&numberOfRecords=" + nutrition.numberOfRecords;
    }
    else {
      this.apiUrl = this.apiUrl + "&numberOfRecords=10";
    }
    return this._httpClient.get(this.apiUrl);
  }
}
