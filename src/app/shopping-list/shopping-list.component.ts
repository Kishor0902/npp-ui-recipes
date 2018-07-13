import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/Ingredients-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
      ingredients: Ingredients[]=[
        new Ingredients('apples',5),
        new Ingredients('Tomatoes',10),
      ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingdent: Ingredients){
    console.log("Ïngredient :"+ingdent);
    this.ingredients.push(ingdent);
  }

}
