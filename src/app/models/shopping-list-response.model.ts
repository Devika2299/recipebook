
import { Recipe } from './recipe.model';

export interface ShoppingListResponse {
  success: boolean;
  shoppingList: Recipe[];
}
