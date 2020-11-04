import { User } from './../../model/User.Model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  myMail: string = 'pratikshinde1497@gmail.com';
  myPhone: string = '+91 788163401';
  myAddress: string = 'A/P Bhigwan-413130, Pune, MH, India';
  myWeb: string = 'http://pratikshinde.io'


  @ViewChild('f') form: any
  
  ngOnInit(): void {}
  
  bigHead: string = 'contact';
  smallHead: string = 'get in touch';
  user: User = new User();
  
  danger: Boolean = false;
  sucess: Boolean = false;
  ways = ['Friends', 'Media', 'News', 'TV', 'Blogs'];
  onSubmit() {
    console.log("form submitted: ", this.form.value);
    
    this.form.reset()
  }
}