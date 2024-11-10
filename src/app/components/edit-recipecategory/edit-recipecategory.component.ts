import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/api-response.model';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-edit-recipecategory',
  templateUrl: './edit-recipecategory.component.html',
  styleUrls: ['./edit-recipecategory.component.css']
})
export class EditRecipecategoryComponent  {}
// implements OnInit{
//   recipe: any = { id: 0, title: '', category: [] };
//   categories: any[] = [];
//   selectedCategories: number[] = [];

//   constructor(
//     private recipeService: RecipeService,
//     private categoryService: CategoryService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadRecipe(id);
//     this.loadCategories();
//   }

//   loadRecipe(id: number): void {
//     this.recipeService.getRecipeById(id).subscribe(recipe => {
//       this.recipe = recipe;
//       this.selectedCategories = recipe.category.map((cat: any) => cat.id);
//     });
//   }



//   loadCategories(): void {
//     this.categoryService.getCategories().subscribe(categories => {
//       this.categories = categories;
//     });
//   }

//   onSubmit(): void {
//     this.categoryService.assignCategoriesToRecipe(this.recipe.id, this.selectedCategories).subscribe(() => {
//       alert('Categories assigned to recipe successfully.');
//       this.router.navigate(['/dashboard']);
//     });
//   }

//   toggleCategorySelection(categoryId: number): void {
//     if (this.selectedCategories.includes(categoryId)) {
//       this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
//     } else {
//       this.selectedCategories.push(categoryId);
//     }
//   }



