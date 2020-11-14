import { User } from './../../model/User.Model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private _emailService: EmailService) {}

  myMail: string = 'pratikshinde1497@gmail.com';
  myPhone: string = '+91 788163401';
  myAddress: string = 'A/P Bhigwan-413130, Pune, MH, India';
  myWeb: string = 'http://pratikshinde.io'


  @ViewChild('f') form: any
  
  ngOnInit(): void {}
  
  bigHead: string = 'contact';
  smallHead: string = 'get in touch';
  user: User = new User();
  res: Observable<any>;
  danger: Boolean = false;
  sucess: Boolean = false;
  ways = ['Friends', 'Media', 'News', 'TV', 'Blogs'];
  async onSubmit() {
    // console.log("form submitted: ", this.form.value);
    this.form.reset();
    this.res = this._emailService.send(this.user);
    
  }
}