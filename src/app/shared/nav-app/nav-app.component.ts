import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-app',
  templateUrl: './nav-app.component.html',
  styleUrls: ['./nav-app.component.css']
})
export class NavAppComponent {
  
  showMenu = false;

  activeMenu(){
    this.showMenu = !this.showMenu;
  }

}
