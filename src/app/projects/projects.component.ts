import { Component, OnInit } from '@angular/core';
import { AngularFirestore, } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  public skills = [];

  constructor(private _projectservice: ProjectService, private db: AngularFirestore) {

    
    // console.log(this.skills);
  }

  public projects = [];

  ngOnInit(): void {
    this.projects = this._projectservice.getProjects();
  }

  getData() {
    let q = this.db.collection('/skills');

    q.get().forEach(res => console.log(res.docs.forEach(d => {
      // console.log(d.data())
      this.skills.push(d.data())
    }))
    )
  }
}
