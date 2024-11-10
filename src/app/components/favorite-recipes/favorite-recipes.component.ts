



// import { Component, OnInit } from '@angular/core';
// import { RecipeService } from 'src/app/services/recipe.service';
// import { Recipe } from 'src/app/models/recipe.model';

// @Component({
//   selector: 'app-favorite-recipes',
//   templateUrl: './favorite-recipes.component.html',
//   styleUrls: ['./favorite-recipes.component.css']
// })
// export class FavoriteRecipesComponent implements OnInit {
//   favoriteRecipes: Recipe[] = [];
//   favorites: any[] = [];
//   userId: number = 1; // Set the user ID here

//   constructor(private recipeService: RecipeService) {}

//   ngOnInit() {
//     this.loadFavoriteRecipes();
//   }

//   loadFavoriteRecipes() {
//     this.recipeService.getFavoriteRecipe(this.userId).subscribe(
//       data => {
//         this.favoriteRecipes = data;
//         this.favorites = this.favoriteRecipes.map(recipe => ({ recipe_id: recipe.id }));
//       },
//       error => {
//         console.error('Error fetching favorite recipes:', error);
//       }
//     );
//   }

//   toggleFavorite(recipeId: number) {
//     const favoriteIndex = this.favorites.findIndex(fav => fav.recipe_id === recipeId);
    
//     if (favoriteIndex !== -1) {
//       // Remove from favorites
//       this.recipeService.removeFavoriteRecipe(this.userId, recipeId).subscribe(
//         response => {
//           if (response.success) {
//             this.favorites.splice(favoriteIndex, 1);
//             this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
//             alert("Recipe has been removed from favorites.");
//           } else {
//             console.error('Error removing favorite:', response.message);
//           }
//         },
//         error => {
//           console.error('Error removing favorite recipe:', error);
//         }
//       );
//     } else {
      
//       this.recipeService.addFavoriteRecipe(this.userId, recipeId).subscribe(
//         response => {
//           if (response.success) {
//             this.favorites.push({ recipe_id: recipeId });
//             this.loadFavoriteRecipes();
//             alert("Recipe has been added to favorites.");
//           } else {
//             console.error('Error adding favorite:', response.message);
//           }
//         },
//         error => {
//           console.error('Error adding favorite recipe:', error);
//         }
//       );
//     }
//   }

//   isFavorite(recipeId: number): boolean {
//     return this.favorites.some(fav => fav.recipe_id === recipeId);
//   }
// }






import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent implements OnInit {
  favoriteRecipes: Recipe[] = [];
  favorites: any[] = [];
  userId: number = 1; 

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.loadFavoriteRecipes();
  }

  loadFavoriteRecipes() {
    this.recipeService.getFavoriteRecipe(this.userId).subscribe(
      data => {
        this.favoriteRecipes = data;
        this.favorites = this.favoriteRecipes.map(recipe => ({ recipe_id: recipe.id }));
      },
      error => {
        console.error('Error fetching favorite recipes:', error);
      }
    );
  }

  toggleFavorite(recipeId: number) {
    const favoriteIndex = this.favorites.findIndex(fav => fav.recipe_id === recipeId);
    
    if (favoriteIndex !== -1) {
    
      this.recipeService.removeFavoriteRecipe(this.userId, recipeId).subscribe(
        response => {
          if (response.success) {
            this.favorites.splice(favoriteIndex, 1);
            this.favoriteRecipes = this.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
            alert("Recipe has been removed from favorites.");
          } else {
            console.error('Error removing favorite:', response.message);
          }
        },
        error => {
          console.error('Error removing favorite recipe:', error);
        }
      );
    } else {
     
      this.recipeService.addFavoriteRecipe(this.userId, recipeId).subscribe(
        response => {
          if (response.success) {
            this.favorites.push({ recipe_id: recipeId });
            this.loadFavoriteRecipes();
            alert("Recipe has been added to favorites.");
          } else {
            console.error('Error adding favorite:', response.message);
          }
        },
        error => {
          console.error('Error adding favorite recipe:', error);
        }
      );
    }
  }

  isFavorite(recipeId: number): boolean {
    return this.favorites.some(fav => fav.recipe_id === recipeId);
  }
}
