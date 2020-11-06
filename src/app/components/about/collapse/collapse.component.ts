import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  constructor() { }
  isCollapsed = true;

  ngOnInit(): void {
  }

  smallHead: string = 'what i have learned so far?'
  bigHead: string = 'my education'
}
