


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost/recipebook_api/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get_categories.php`); 
  }

  
  createCategory(name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create_category.php`, { name }); 
  }

  
  assignCategoriesToRecipe(recipe_id: number, category_ids: number[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/assign_categories_to_recipe.php`, { recipe_id, category_ids }); 
  }
}
