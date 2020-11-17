import { EducationService } from './../../services/education.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public eduService: EducationService) { }

  smallHead: string = 'who am i?';
  bigHead: string = 'about me';


  smallHead1: string = 'what i have learned so far?'
  bigHead1: string = 'my education';

  eduData: Object;

  ngOnInit(): void {
    this.eduData = this.eduService.getEducationDetails();
  }


}
