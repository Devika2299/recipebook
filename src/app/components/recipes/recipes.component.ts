





import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Ensure Router is imported
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  category: string[] = ['Desserts', 'Main Course', 'Appetizers'];
  favorites: Recipe[] = [];
  allRecipes: Recipe[] = [];
  filteredFavorites: Recipe[] = [];
  selectedCategory: string = '';

  constructor(private recipeService: RecipeService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loadFavorites();
    this.loadAllRecipes();
  }

  loadFavorites() {
    this.recipeService.getFavoriteRecipes().subscribe((recipes: Recipe[]) => {
      this.favorites = recipes.map(recipe => ({
        ...recipe,
        imagePath: recipe.imagePath || null
      }));
      this.filteredFavorites = this.favorites;
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

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category) {
      this.filteredFavorites = this.favorites.filter(recipe => 
        recipe.category.includes(category)
      );
    } else {
      this.filteredFavorites = this.favorites; 
    }
  }

  addToShoppingList(recipe: Recipe) {
    const userId = 1; 
    this.recipeService.addToShoppingList(userId, recipe.id).subscribe(response => {
      if (response.success) {
        alert(`${recipe.title} has been added to your shopping list!`);
        this.router.navigate(['/shopping-list']); 
      } else {
        alert("Error adding to shopping list.");
      }
    });
  }
}



