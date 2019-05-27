
import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe';
import { switchMap, debounceTime } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})


export class AllRecipesComponent implements OnInit {

  constructor(private recipeServiceService: RecipeServiceService, private formBuilder: FormBuilder) { }

  getRecipes(): void {
  	this.recipeServiceService.getRecipes()
      .subscribe(recipes => {console.log(recipes);this.recipes = recipes});
  }

  recipes: Recipe[];

  /*skip: number = 0;
  limit = 9;
  query: string = "";
  fields: string = "";
  sort: string = "{name:1}";*/

  ngOnInit() {
  	this.getRecipes();
  }

}
