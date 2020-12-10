import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  @Input() eduInfo: {head: string, body: string, studiedAt: string, startYear: number, endYear: number}
  constructor() { }
  isCollapsed = true;


  ngOnInit(): void {
  }

}
