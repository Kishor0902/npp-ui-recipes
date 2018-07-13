import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply test','https://pulses.org/nap/wp-content/uploads/2016/04/Ambitious-Kitchen_Banana-Bread-2.jpg'),
    new Recipe('Another Test Recipe','This is simply test','https://pulses.org/nap/wp-content/uploads/2016/04/Ambitious-Kitchen_Banana-Bread-2.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){ 
    this.recipeWasSelected.emit(recipe);
  }

}
