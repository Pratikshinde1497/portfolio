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
  
  user: User= new User();

  onSubmit() {
    // console.log("form submitted: ", this.user);
    this.form.reset()
  }
}


class User {
  constructor(public name: String = "", public email: String = "", public msg: String = "") {}
}