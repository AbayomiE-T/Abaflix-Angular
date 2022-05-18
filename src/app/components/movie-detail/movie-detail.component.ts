import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMovie } from 'src/app/interfaces/IMovie';
import * as fromApp from '../../store/app.reducer';
import * as MovieActions from '../../store/movies/movies.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  public selectedMovie: IMovie | null;
  public likedMovies: IMovie[];
  private onDestroy$: Subject<void> = new Subject<void>();
  public baseUrl = 'https://image.tmdb.org/t/p/original';

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>, private location: Location) { }

  ngOnInit(): void {
    const id:number = +this.route.snapshot.params['id'];

    this.store.dispatch(MovieActions.findMovie({id}));
    this.store.select('movies').pipe(takeUntil(this.onDestroy$)).subscribe((movies)=>{
      this.selectedMovie = movies.selectedMovie;
      this.likedMovies = movies.likedMovies;
    })
  }

  ngOnDestroy(): void{
    this.onDestroy$.next();
  }

  public likeToggleHandler(): void {
    if (!this.isLiked()) {
      this.store.dispatch(MovieActions.addToLikes({movie: this.selectedMovie!}));
  }

  else {
      this.store.dispatch(MovieActions.removeFromLikes({id: this.selectedMovie!.id}));
  }

  }

  public goBack(): void{
    this.location.historyGo(-1);
  }

  public isLiked(): boolean{
    
      return !!this.likedMovies.find((movie) => movie.id === this.selectedMovie!.id);
  }
}
