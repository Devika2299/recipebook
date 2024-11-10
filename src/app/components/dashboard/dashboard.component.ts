

import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html', 
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = []; 
  category: any[] = [];
  filteredRecipes: Recipe[] = []; 
  allRecipes: Recipe[] = [];
  favorites: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes(); 
    this.loadAllRecipes();
    this.loadCategories();
  }

  loadRecipes() {
    this.recipeService.getRecipes().subscribe((data: any) => {
      this.recipes = Array.isArray(data) ? data : [];
      this.filteredRecipes = [...this.recipes];
    });
  }

  loadAllRecipes() {
    this.recipeService.getAllRecipes().subscribe((recipes: Recipe[]) => {
      this.allRecipes = recipes.map(recipe => ({
        ...recipe,
        imagePath: recipe.imagePath || null
      }));
    });
  }

  loadCategories(): void {
    this.recipeService.getCategories().subscribe(data => {
      this.category = data;
    });
  }

  filterByCategory(category: string) {
    this.filteredRecipes = category === 'All' ? [...this.recipes] : this.recipes.filter(recipe =>
      recipe.category && recipe.category.includes(category)
    );
  }
}



