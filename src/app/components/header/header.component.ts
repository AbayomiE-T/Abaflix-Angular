import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isHomePageActive:boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public togglePage(): void {
    this.isHomePageActive = !this.isHomePageActive;

    if (!this.isHomePageActive){
      this.router.navigate(['likes']);
    }

    if (this.isHomePageActive){
      this.router.navigate(['/']);
    }
  }

}
