

import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { catchError, throwError } from 'rxjs'; 

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  category: any[] = [];
  categoryForm: FormGroup; 

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {
 
    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.recipeService.getCategories().subscribe(category => {
      this.category = category;
    });
  }

  addCategory(): void {
    if (this.categoryForm.valid) { 
      this.recipeService.createCategory(this.categoryForm.value.categoryName).pipe(
        catchError(error => {
          console.error('Error adding category:', error);
          return throwError(error); 
        })
      ).subscribe(response => {
        console.log('Category added successfully:', response);
        alert(response.message); 
        this.loadCategories(); 
        this.categoryForm.reset(); 
      });
    } else {
      alert('Category name cannot be empty.'); 
    }
  }
}



