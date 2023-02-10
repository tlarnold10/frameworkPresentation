import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './features/recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { DailyNutritionComponent } from './features/daily/daily-nutrition/daily-nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    DailyNutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
