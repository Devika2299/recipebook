



import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadShoppingList();
  }

  loadShoppingList() {
    const userId = 1;
    this.recipeService.getShoppingList(userId).subscribe(response => {
      if (response.success) {
        this.shoppingList = response.shoppingList; 
      } else {
        alert("Error loading shopping list.");
      }
    }, error => {
      console.error("Error fetching shopping list:", error);
      alert("An error occurred while fetching the shopping list.");
    });
  }

  removeFromShoppingList(recipe: Recipe) {
    const userId = 1; 
    this.recipeService.removeFromShoppingList(userId, recipe.id).subscribe(response => {
      if (response.success) {
        alert("Recipe has been removed from your shopping list.");
        this.loadShoppingList(); 
      } else {
        alert("Error removing from shopping list.");
      }
    });
  }
}

