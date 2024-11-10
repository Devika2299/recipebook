import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../models/api-response.model';
import { ShoppingListResponse } from '../models/shopping-list-response.model';

interface ShoppingItem {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost/recipebook_api/'; 
  private shoppingList: ShoppingItem[] = [];


  constructor(private http:HttpClient) { }
  
  getFavoriteRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}getFavoriteRecipes.php`);
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}get_all_recipes.php`);
  }
  
  // getCategories(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}get_categories.php`);
  // }



  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_categories.php`); 
  }

  
  createCategory(name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create_category.php`, { name }); 
  }

 

  
  
  assignCategoriesToRecipe(recipe_id: number, category_ids: number[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/assign_categories_to_recipe.php`, { recipe_id, category_ids }); 
  }

  // getRecipes(): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(`${this.apiUrl}/recipes.php`);
  // }
 
  

  getRecipeById(id: number): Observable<ApiResponse<Recipe>> { 
    return this.http.get<ApiResponse<Recipe>>(`${this.apiUrl}/getrecipes.php?id=${id}`);
  }
  

  addRecipe(formData: FormData): Observable<any> { 
    return this.http.post(`${this.apiUrl}add_recipe.php`, formData);
  }


  updateRecipe(recipe: Recipe): Observable<ApiResponse<Recipe>> {
    return this.http.put<ApiResponse<Recipe>>(`${this.apiUrl}/updateRecipe.php`, recipe);
  }


  deleteRecipe(id: number): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(`${this.apiUrl}/deleteRecipe.php`, {
        body: { id }  
    });
}


  addFavoriteRecipe(userId: number, recipeId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_favorite_recipe.php`, { user_id: userId, recipe_id: recipeId });
  }

  


  removeFavoriteRecipe(userId: number, recipeId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/remove-favorite.php`, { user_id: userId, recipe_id: recipeId });
  }







  getFavoriteRecipe(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getFavoriteRecipes.php?user_id=${userId}`);
  }


  addToShoppingList(userId: number, recipeId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}add_to_shopping_list.php`, { user_id: userId, recipe_id: recipeId });
  }

 

  getShoppingList(userId: number): Observable<ShoppingListResponse> {
    return this.http.post<ShoppingListResponse>(`${this.apiUrl}get_shopping_list.php`, { user_id: userId });
  }




  removeFromShoppingList(userId: number, recipeId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}remove_from_shopping_list.php`, { user_id: userId, recipe_id: recipeId });
  }

 



  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl + 'getrecipes.php'); 
  }
  

 
  createRecipe(formData: FormData): Observable<any> {
    
    return this.http.post<any>(`${this.apiUrl}createRecipe.php`, formData, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    });
  }

 
  
  getRecipesByCategory(category: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}getRecipesByCategory.php?category=${category}`);
  }


  


  // Local shopping list methods
  getShoppingListt() {
    return this.shoppingList;
  }

  addItem(item: ShoppingItem) {
    this.shoppingList.push(item);
  }

  deleteItem(index: number) {
    this.shoppingList.splice(index, 1);
  }

  toggleComplete(index: number) {
    this.shoppingList[index].completed = !this.shoppingList[index].completed;
  }

  clearAll() {
    this.shoppingList = [];
  }

}


