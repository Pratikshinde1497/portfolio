import { User } from './../../model/User.Model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  @ViewChild('f') form: any
  ngOnInit(): void {}
  
  user: User = new User();
  
  danger: Boolean = false;
  sucess: Boolean = false;
  ways = ['Friends', 'Media', 'News', 'TV', 'Blogs'];
  onSubmit() {
    // console.log("form submitted: ", this.user);
    this.form.reset()
  }
}