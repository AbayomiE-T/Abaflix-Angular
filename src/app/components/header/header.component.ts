import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() 
  private goToFavourites = new EventEmitter<boolean>();

  @Output()
  private goBackHome = new EventEmitter<boolean>();

  public isHomePageActive:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public togglePage(): void {
    this.isHomePageActive = !this.isHomePageActive;

    if (!this.isHomePageActive){
      this.goToFavourites.emit(this.isHomePageActive);
    }

    if (this.isHomePageActive){
      this.goBackHome.emit(this.isHomePageActive);
    }
  }

}
