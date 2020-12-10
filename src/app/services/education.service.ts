import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  educationData = [
    {
      head: 'Master of Computer Science',
      body: 'Completed Master of science degree from Savitribai Phule Pune University in Computer Science stream with A+ grade.',
      studiedAt: 'Nowrosjee Wadia College',
      startYear: 2018,
      endYear: 2020
    },
    {
      head: 'Bachelor of Computer Science',
      body: 'Completed Bachelor of science degree from Savitribai Phule Pune University in Computer Science stream with 77%.',
      studiedAt: 'Vidyapratishthan College, Baramati',
      startYear: 2015,
      endYear: 2018
    },
    {
      head: 'Higher Secondary School Certificate',
      body: 'Completed 12th from Maharashthra Board with 74%',
      studiedAt: 'Vidyapratishthan College, Baramati',
      startYear: 2013,
      endYear: 2015
    },
    {
      head: 'Secondary school certificate',
      body: 'ssc cetificate',
      studiedAt: 'Bhairavnath Vidyalaya, Bhigwan',
      startYear: 2012,
      endYear: 2013
    },
  ];

  getEducationDetails() {
    return this.educationData;
  }
}
