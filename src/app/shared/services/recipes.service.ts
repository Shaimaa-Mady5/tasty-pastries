import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from '../interfaces/recipes';
import { RecipesArray } from '../interfaces/recipes-array';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}
  getRecipes(): Observable<RecipesArray> {
    return this.httpClient.get<RecipesArray>(`
https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`);
  }
}
