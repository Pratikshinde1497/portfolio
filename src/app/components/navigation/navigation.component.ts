import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = 'PRATIK SHINDE';
  designation: string = 'WEB DEVELOPER';
  location: string = 'PUNE, MH, INDIA';

  imgUrl: string = './assets/images/me.jpg';
}
