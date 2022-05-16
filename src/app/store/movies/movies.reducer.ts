import { createReducer, on } from "@ngrx/store";
import * as MovieActions from '../../store/movies/movies.actions';

export interface State{
    movies: any[],
    likedMovies: any[],
    selectedMovie: any;
};

const initialState: State = {
    movies: [],
    likedMovies: [],
    selectedMovie: null
};

export const movieReducer = createReducer(
    initialState,
    on(MovieActions.fetchMovies,
        (state:State)=> ({
            ...state
        })),
    
    on(MovieActions.setMovies, 
        (state: State, action)=> ({
            ...state,
            movies: action.movies
        })),
    
    on(MovieActions.addToLikes,
        (state: State, action)=> ({
            ...state,
            likedMovies: [...state.likedMovies, action.movie]
        })),

    on(MovieActions.findMovie,
        (state: State, action)=>({
            ...state,
            selectedMovie: state.movies.filter((movie)=> movie.id === action.id)[0]
        })),

    on(MovieActions.removeFromLikes,
        (state: State, action)=>({
            ...state,
            likedMovies: state.likedMovies.filter((movie)=> movie.id !== action.id)
        }))
);