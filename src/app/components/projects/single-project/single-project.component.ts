import { Project } from './../../../model/Project.Model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  constructor() { }

  @Input() projectObj: Project;
  ngOnInit(): void {
    
  }

}
