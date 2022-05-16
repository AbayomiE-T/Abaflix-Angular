import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as MovieActions from '../store/movies/movies.actions';

const baseUrl = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private store: Store<fromApp.AppState>) { }

  public getMovies(): Observable<any>{
    return this.http.get(baseUrl);
  }
}
