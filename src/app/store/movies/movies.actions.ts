import { createAction, props } from "@ngrx/store";
import { IMovie } from "src/app/interfaces/IMovie";

export const fetchMovies = createAction('[Movies] Fetch Movies');

export const setMovies = createAction(
    '[Movies] Set Movies',
    props<{movies: IMovie[]}>());

export const findMovie = createAction(
    '[Movies] Find Movie',
    props<{id: number}>()
)

export const addToLikes = createAction(
    '[Movies] Add To Likes',
    props<{movie: IMovie}>()
)

export const removeFromLikes = createAction(
    '[Movies] Remove From Likes',
    props<{id: number}>()
)
