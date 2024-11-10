



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.css']
})
export class RecipeCreationComponent {
  recipe: Recipe = {
    id: 0,
    title: '',
    ingredients: [''],
    steps: [''],
    cookingTime: 0,
    difficulty: '', 
    category: [''],
    isFavorite: false,
    imagePath: null
  };

  selectedCategory: string = ''; 
  selectedImage: File | null = null;

  constructor(private recipeService: RecipeService, private router: Router) {}

  updateCategories() {
    if (this.selectedCategory) {
      if (!this.recipe.category.includes(this.selectedCategory)) {
        this.recipe.category.push(this.selectedCategory); 
      }
      this.selectedCategory = ''; 
    }
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  addIngredient() {
    this.recipe.ingredients.push('');
  
  }

  removeIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }

  addStep() {
    this.recipe.steps.push('');
  }

  removeStep(index: number) {
    this.recipe.steps.splice(index, 1);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.recipe.imagePath = file; 
    }
  }

 

  
  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.recipe.title);
    formData.append('ingredients', JSON.stringify(this.recipe.ingredients));
    formData.append('steps', JSON.stringify(this.recipe.steps));
    formData.append('cookingTime', this.recipe.cookingTime.toString());
    formData.append('difficulty', this.recipe.difficulty);

  
    let categoryString;
    if (Array.isArray(this.recipe.category) && this.recipe.category.length > 0) {
        categoryString = this.recipe.category.join(', '); 
    } else if (typeof this.recipe.category === 'string') {
        categoryString = this.recipe.category; 
    } else {
        categoryString = ''; 
    }
    
    formData.append('category', categoryString);
    formData.append('isFavorite', this.recipe.isFavorite ? '1' : '0'); 

    if (this.selectedImage) {
        formData.append('image', this.selectedImage); 
    }

   



    this.recipeService.addRecipe(formData).subscribe(() => {
      alert('Recipe created successfully!');
      this.router.navigate(['/dashboard']);
    }, (error) => {
      alert('Error adding recipe: ' + error.message);
    });
  }
}




