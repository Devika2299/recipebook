export interface Ingredient {
  name: string;
  completed: boolean;
}


export interface Recipe {
  id: number; 
  title: string; 
  ingredients: string[]; 
  steps: string[]; 
  cookingTime: number; 
  difficulty: string; 
  category: string[];
  isFavorite: boolean;
  imagePath?: string |null;
}


