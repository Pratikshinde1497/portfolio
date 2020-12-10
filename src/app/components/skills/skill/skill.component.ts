import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/model/Skill.Model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  @Input() skillObj: Skill
  ngOnInit(): void {
    console.log(this.skillObj);
    
  }

}
