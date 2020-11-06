import { ProjectService } from './../../services/project.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor(private _projectservice: ProjectService, private router: Router, private route: ActivatedRoute) {
    this.projects = this._projectservice.getProjects();
  }

  smallHead: string = 'what i have done?';
  bigHead: string = 'all projects';

  ngOnDestroy(): void {

    this.projects = [];
    // throw new Error('Method not implemented.');
  }

  public projects = [];

  ngOnInit(): void {
  }

  onSelect(project) {
    let name = project.name;
    this.router.navigate(['/projects', name, ], {queryParams: {project: btoa(JSON.stringify(project))}});
    
  }
}
