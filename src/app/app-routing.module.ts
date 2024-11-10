import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeCreationComponent } from './components/recipe-creation/recipe-creation.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { EditRecipecategoryComponent } from './components/edit-recipecategory/edit-recipecategory.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FavoriteRecipesComponent } from './components/favorite-recipes/favorite-recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "dashboard", component: DashboardComponent},
  {path:"recipe-details/:id",component:RecipeDetailsComponent},
  {path:"recipe-creation",component:RecipeCreationComponent},
  {path:"edit-recipe/:id",component:EditRecipeComponent},
  {path:"category-management",component:CategoryManagementComponent},
  {path:"edit-recipecategory",component:EditRecipecategoryComponent},
  {path:"recipes",component:RecipesComponent},
  {path:"favorite-recipes",component:FavoriteRecipesComponent},
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
