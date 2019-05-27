import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe';
import { switchMap, debounceTime } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-most-rated-recipes',
  templateUrl: './most-rated-recipes.component.html',
  styleUrls: ['./most-rated-recipes.component.css']
})
export class MostRatedRecipesComponent implements OnInit {

  constructor(private recipeServiceService: RecipeServiceService, private formBuilder: FormBuilder) { }

  getRecipes(filter, fields, limit, skip, sort): void {
  	this.recipeServiceService.getRecipes(filter, fields, limit, skip, sort)
      .subscribe(recipes => {console.log(recipes);this.recipes = recipes});
  }

  recipes: Recipe[];

  skip: number = 0;
  limit = 9;
  query: string = "";
  fields: string = "";
  sort: string = "{name:1}";

  ngOnInit() {
  	this.getRecipes("&q={}", this.fields, "&l="+this.limit, "&sk="+this.skip, "&s="+this.sort);
  }

}
