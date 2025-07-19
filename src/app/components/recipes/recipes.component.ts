import { Component } from '@angular/core';
import { RecipesService } from '../../shared/services/recipes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Recipes } from '../../shared/interfaces/recipes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipes',
  imports: [NgFor],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipes:Recipes[]=[]
  constructor(private recipesService: RecipesService) {}
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(): void {
    this.recipesService.getRecipes().subscribe({
      next: (resp) => {
        console.log(resp);
        this.recipes=resp.meals
        console.log(this.recipes);
        
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
