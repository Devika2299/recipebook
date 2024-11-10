



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ApiResponse } from 'src/app/models/api-response.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const recipeId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRecipeDetails(recipeId);
  }

  loadRecipeDetails(id: number) {
    this.recipeService.getRecipeById(id).subscribe({
      next: (result: ApiResponse<Recipe>) => {
        if (result.success && result.data) {
          this.recipe = result.data;

          
          this.recipe.ingredients = Array.isArray(this.recipe.ingredients) ? this.recipe.ingredients : [];
          this.recipe.steps = Array.isArray(this.recipe.steps) ? this.recipe.steps : [];
        } else {
          console.error('Recipe not found');
          alert('Recipe not found!');
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        console.error('Error fetching recipe:', error);
        alert('Error fetching recipe!');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  addIngredient() {
    if (!Array.isArray(this.recipe.ingredients)) {
      this.recipe.ingredients = [];
    }
    this.recipe.ingredients.push('');

  }

  removeIngredient(index: number) {
    if (Array.isArray(this.recipe.ingredients)) {
      this.recipe.ingredients.splice(index, 1);
    }
  }

  addStep() {
    if (!Array.isArray(this.recipe.steps)) {
      this.recipe.steps = [];
    }
    this.recipe.steps.push('');
  }

  removeStep(index: number) {
    if (Array.isArray(this.recipe.steps)) {
      this.recipe.steps.splice(index, 1);
    }
  }

  updateRecipe() {
    
    if (!this.recipe.title || this.recipe.cookingTime <= 0 ||
      this.recipe.ingredients.some(ing => !ing) ||
      this.recipe.steps.some(step => !step)) {
      alert('Please fill out all required fields correctly.');
      return;
    }

  
    this.recipeService.updateRecipe(this.recipe).subscribe({
      next: () => {
        alert('Recipe updated successfully!');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error updating recipe:', error);
        alert('Error updating recipe!');
      }
    });
  }

  confirmDelete(id: number) {
    if (confirm("Are you sure you want to delete this recipe?")) {
      this.recipeService.deleteRecipe(id).subscribe({
        next: () => {
          alert('Recipe deleted successfully!');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error deleting recipe:', error);
          alert('Error deleting recipe!');
        }
      });
    }
  }
}
