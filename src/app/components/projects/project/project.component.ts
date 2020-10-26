import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  public projectName: string;
  public project;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.projectName = params.get('id');      
    })

    this.route.queryParams.subscribe((queries) => {
      this.project = JSON.parse(atob(queries["project"]))
      
    })
  }

}
