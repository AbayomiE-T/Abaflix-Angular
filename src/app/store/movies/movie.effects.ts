import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { MovieService } from "src/app/services/movie.service";
import * as MovieActions from './movies.actions'

@Injectable()
export class MovieEffects{
    fetchMovies$ = createEffect(()=> this.actions$.pipe(
        ofType(MovieActions.fetchMovies),
        tap(()=>{console.log("calling effect")}),
        switchMap(()=> this.movieService.getMovies()
        .pipe(map((res)=> MovieActions.setMovies({movies: res.results}))))
    ))

    constructor(private actions$: Actions, private movieService: MovieService){}
}