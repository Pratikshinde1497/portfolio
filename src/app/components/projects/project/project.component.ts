import { ProjectService } from 'src/app/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private route: ActivatedRoute, private _router: Router, private _projectServ: ProjectService) { }

  public projectName: string;
  public project;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.projectName = params.get('name');      
    })
    this.project = this._projectServ.getProjectByName(this.projectName);
    
  }

  back() {
    this._router.navigate(['projects']);
  }

}
