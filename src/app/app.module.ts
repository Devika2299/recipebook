import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeCreationComponent } from './components/recipe-creation/recipe-creation.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { EditRecipecategoryComponent } from './components/edit-recipecategory/edit-recipecategory.component';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';
import { RouterModule } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeDetailsComponent,
    RecipeCreationComponent,
    EditRecipeComponent,
    HomeComponent,
    CategoryManagementComponent,
    EditRecipecategoryComponent,
    FavoriteRecipesComponent,
    RecipesComponent,
    ShoppingListComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
