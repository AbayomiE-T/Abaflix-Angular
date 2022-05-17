import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedMoviesComponent } from './components/liked-movies/liked-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path: '', pathMatch:"full", component: MoviesComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'likes', component: LikedMoviesComponent},
  {path: 'detail/:id', component: MovieDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
