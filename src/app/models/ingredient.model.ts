// ingredient.model.ts
export class Ingredient {
    name: string;
    selected: boolean;
  
    constructor(name: string, selected: boolean = false) {
      this.name = name || '';  // Ensure name is always a non-empty string
      this.selected = selected;
    }
  }
  