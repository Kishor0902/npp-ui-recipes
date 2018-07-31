import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  subscription: Subscription;
  recipes: Recipe[];
   
  constructor(private recipesService: RecipesService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipse();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
