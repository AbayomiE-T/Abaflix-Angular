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

  constructor() { }

  ngOnInit(): void {
  }

}
