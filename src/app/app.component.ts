import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as MovieActions from './store/movies/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isHomePageActive: boolean = true;

  constructor(private store: Store<fromApp.AppState>){}

  ngOnInit(): void {
    this.store.dispatch(MovieActions.fetchMovies());
  }

  public toggleView(value: boolean): void{
    this.isHomePageActive = value;
  }
}
