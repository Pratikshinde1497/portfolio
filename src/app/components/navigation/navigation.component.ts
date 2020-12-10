import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  name: string = 'PRATIK SHINDE';
  designation: string = 'WEB DEVELOPER';
  location: string = 'PUNE, MH, INDIA';

  imgUrl: string = 'assets/images/me.jpg';

  navigateToProjects() {
    this._router.navigate(['projects']);
  }

  navigateToAbout() {
    this._router.navigate(['about']);
  }

  navigateToSkills() {
    this._router.navigate(['skills']);
  }

  navigateToContact() {
    this._router.navigate(['contact']);
  }
}
