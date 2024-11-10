// export interface RecipeResponse {
//     success: boolean;
//     data: Recipe[]; // Assuming Recipe is already defined in your models
//   }
  


import { Recipe } from './recipe.model'; // Ensure the path is correct

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;         // data can be null if not found
  message?: string;       // optional message for error or information
}

export type RecipeApiResponse = ApiResponse<Recipe[]>; // Using the Recipe type
