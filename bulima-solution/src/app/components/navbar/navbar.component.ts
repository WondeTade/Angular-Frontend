import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
    
  logo: string = 'Bu-Li-Ma'

  constructor(){}

  opened = false;

  onToggler(){
  
  }
}