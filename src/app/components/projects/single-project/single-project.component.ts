import { Project } from './../../../model/Project.Model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  @Input() projectObj: Project;
  ngOnInit(): void {
    
  }

  onSelect(name) {
    this._router.navigate([name], { relativeTo: this._route});
  }
}
