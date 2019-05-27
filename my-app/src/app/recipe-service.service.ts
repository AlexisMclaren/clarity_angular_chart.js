import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private recipesUrl = "http://localhost:3000";

	getRecipes(query: string="&q={}", fields: string="&f={}", limit: string="&l=9", skip: string="&sk=0", sort: string="&s={d:-1}"): Observable<Recipe[]> {
		console.log(this.recipesUrl)
      return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap(_ => console.log('fetched recipes')),
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      );
  }

 

  constructor(private http: HttpClient) { }

     /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
