import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  educationData = [
    {
      head: 'Master of Computer Science',
      body: 'got master ddegree'
    },
    {
      head: 'Bachelor of Computer Science',
      body: 'got bachelores degree'
    },
    {
      head: 'Higher Secondary School Certificate',
      body: 'hsc certificate'
    },
    {
      head: 'Secondary school certificate',
      body: 'ssc cetificate'
    },
  ];

  getEducationDetails() {
    return this.educationData;
  }
}
