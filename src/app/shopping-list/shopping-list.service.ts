import { Ingredients } from "../shared/Ingredients-model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredients[]>();

    private ingredients: Ingredients[]=[
        new Ingredients('apples',5),
        new Ingredients('Tomatoes',10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    } 

    addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredients[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice()); 
    }
}