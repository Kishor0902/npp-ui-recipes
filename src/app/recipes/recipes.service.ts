import { Inject,EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/Ingredients-model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipesService{
    recipseSelected = new EventEmitter<Recipe>();
   private  recipes: Recipe[] = [
        new Recipe(0,'A Test Recipe','This is simply test',
        'https://image.shutterstock.com/z/stock-photo-pulled-pork-sweet-bun-with-mixed-lettuce-leaves-698117131.jpg',
        [
            new Ingredients('Meat',1),
            new Ingredients('french Fries',20)
        ]),
        new Recipe(1,'Another Test Recipe','This is simply test',
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
        [
            new Ingredients('Buns',1),
            new Ingredients('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipse(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredients[]){
        this.slService.addIngredients(ingredients);
      }


}