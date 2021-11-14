import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from "./../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = 'http://gateway.marvel.com/v1/public/';

  constructor(private http: HttpClient) { }

  public get(route:string, params:any): Observable<Object> {
    const url = `${this.baseUrl}/${route}`;
    params.limit = 20;
    params.apikey = environment.apiKey;

    return this.http.get(url, {
      'params': params,
    }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
