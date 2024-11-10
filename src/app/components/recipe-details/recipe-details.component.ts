

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RecipeService } from 'src/app/services/recipe.service';
// import { Recipe } from 'src/app/models/recipe.model';
// import { ApiResponse } from 'src/app/models/api-response.model'; 

// @Component({
//   selector: 'app-recipe-details',
//   templateUrl: './recipe-details.component.html',
//   styleUrls: ['./recipe-details.component.css']
// })
// export class RecipeDetailsComponent implements OnInit {
//   recipe!: Recipe; 

//   constructor(
//     private route: ActivatedRoute,
//     private recipeService: RecipeService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const recipeId = this.route.snapshot.paramMap.get('id'); 
//     if (recipeId) {
//       this.loadRecipeDetails(+recipeId); 
//     }
//   }




//   loadRecipeDetails(id: number) {
//     this.recipeService.getRecipeById(id).subscribe({
//       next: (result: ApiResponse<Recipe>) => { 
//         if (result.success && result.data) {
//           this.recipe = result.data; 
//         } else {
//           console.error('Recipe not found or API call failed');
//         }
//       },
//       error: (error) => {
//         console.error('Error fetching recipe:', error);
//       }
//     });
//   }
  

//   editRecipe() {
//     this.router.navigate(['/edit-recipe', this.recipe.id]); 
//   }

//   deleteRecipe() {
//     if (confirm('Are you sure you want to delete this recipe?')) {
//       this.recipeService.deleteRecipe(this.recipe.id).subscribe(() => {
//         alert('Recipe deleted successfully');
//         this.router.navigate(['/dashboard']); 
//       });
//     }
//   }
// }







import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ApiResponse } from 'src/app/models/api-response.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.loadRecipeDetails(+recipeId);
    }
  }

  loadRecipeDetails(id: number) {
    this.recipeService.getRecipeById(id).subscribe({
      next: (result: ApiResponse<Recipe>) => {
        if (result.success && result.data) {
          this.recipe = result.data;

          // Ensure ingredients and steps are arrays
          if (typeof this.recipe.ingredients === 'string') {
            this.recipe.ingredients = JSON.parse(this.recipe.ingredients);
          }
          if (typeof this.recipe.steps === 'string') {
            this.recipe.steps = JSON.parse(this.recipe.steps);
          }
        } else {
          console.error('Recipe not found or API call failed');
        }
      },
      error: (error) => {
        console.error('Error fetching recipe:', error);
      }
    });
  }

  editRecipe() {
    this.router.navigate(['/edit-recipe', this.recipe.id]);
  }

  deleteRecipe() {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(this.recipe.id).subscribe(() => {
        alert('Recipe deleted successfully');
        this.router.navigate(['/dashboard']);
      });
    }
  }
}



