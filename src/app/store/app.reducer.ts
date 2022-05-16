import { ActionReducerMap } from '@ngrx/store';
import * as fromMovies from '../store/movies/movies.reducer';

export interface AppState{
    movies: fromMovies.State;
};

export const appReducer: ActionReducerMap<AppState> = {
    movies: fromMovies.movieReducer
};