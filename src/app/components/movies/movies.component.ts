import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/interfaces/IMovie';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<IMovie[]>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.movies$ = this.store.select((state)=> state.movies.movies);
  }

}
