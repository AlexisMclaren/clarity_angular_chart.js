import { Injectable } from '@angular/core';
import { VideoGames } from './video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {

  private vidGames = "https://localhost:44301/api/titles/3";
 
  constructor(private http: HttpClient) { }

  getVideoGames(): Observable<VideoGames[]> {
		console.log(this.vidGames);
      return this.http.get<VideoGames[]>(this.vidGames)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<VideoGames[]>('getVideoGames', []))
      );
  }

  
  videoGame(id: number): Observable<VideoGames> {
		console.log(this.vidGames);
      return this.http.get<VideoGames>(this.vidGames)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<VideoGames>('getVideoGames'))
      );
  }
  
  /*GET video game by id. Will 404 if id not found 
    videoGame(id: number): Observable<VideoGames> {
      var url = this.vidGames+"/"+ id.toString();
      return this.http.get<VideoGames>(url).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<VideoGames>('videoGame'))
      );
    }*/
  
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
