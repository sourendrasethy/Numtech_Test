import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { catchError } from 'rxjs/operators';;
import {Observable, throwError} from 'rxjs';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  createUser(data: any) {
    let url = this.baseUrl + '/create';
    return this.http.post(url, JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAllUsers(){
    let url = this.baseUrl + '/employees';
    return this.http.get(url)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getById(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/employee/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  delete(id){
    return this.http.delete<any>(this.baseUrl + '/delete/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
