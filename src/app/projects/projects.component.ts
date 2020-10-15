import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  constructor(private _projectservice: ProjectService) {
    this.projects = this._projectservice.getProjects();
    this.skills = this._projectservice.getSkills();
  }

  ngOnDestroy(): void {

    this.projects = [];
    this.skills = [];
    // throw new Error('Method not implemented.');
  }

  public skills = [];
  public projects = [];

  ngOnInit(): void {
  }


  getData() {
    
  }
}
