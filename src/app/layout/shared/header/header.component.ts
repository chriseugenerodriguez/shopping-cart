import { Component } from "@angular/core";

// COMPONENT
@Component({
	selector: 'header-app',
	templateUrl: 'header.component.html',
})

// CLASS
export class HeaderComponent {

  nav: boolean;

  constructor(){
    this.nav = false;
  }

  toggleNav(){
    this.nav = !this.nav;
  }
}
