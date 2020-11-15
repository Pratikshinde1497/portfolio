import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name = '';
  isSmallScreen: boolean = true;

  openNavBar() {
    return alert("open navBAr")
  }
}
