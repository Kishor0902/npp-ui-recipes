import { Component, OnInit, ViewChild,EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/Ingredients-model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredentAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredent = new Ingredients(ingName,ingAmount);
    this.ingredentAdded.emit(newIngredent);
  }

}
