import { createAction, props } from "@ngrx/store";

export const fetchMovies = createAction('[Movies] Fetch Movies');

export const setMovies = createAction(
    '[Movies] Set Movies',
    props<{movies: any}>());

export const findMovie = createAction(
    '[Movies] Find Movie',
    props<{id: number}>()
)

export const addToLikes = createAction(
    '[Movies] Add To Likes',
    props<{movie: any}>()
)

export const removeFromLikes = createAction(
    '[Movies] Remove From Likes',
    props<{id: number}>()
)
