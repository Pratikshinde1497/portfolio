import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private _skills: ProjectService) { }

  skills: Array<object> = [];
  
  smallHead: string = 'what i do?';
  bigHead: string = 'here are some of my expertise';

  ngOnInit(): void {
    this.skills = this._skills.skills;
  }

}
