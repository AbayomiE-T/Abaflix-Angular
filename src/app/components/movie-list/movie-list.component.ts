import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input()
  public movies$: Observable<IMovie[]>;

  public baseUrl: string = "https://image.tmdb.org/t/p/w300";

  constructor() { }

  ngOnInit(): void {
  }

}
