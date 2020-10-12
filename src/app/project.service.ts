import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getProjects() {
    return [
      {
        id: 1,
        name: 'Online Assignment Submission System',
        description:
          'java based project, having college assignments in mind, teacher or students can upload and download assignments with speed of Light..!',
        technologies: ['java advanced', 'mysql', 'tomcat server'],
        period: '5 months',
      },
      {
        id: 2,
        name: 'ChatBot',
        description:
          'java based project, having college admissions and day to day lifestyle of students in mind, teacher or students can  ask amy question related to syllabus, admissions, hollidays within period or lectures for today with speed of Sound..!',
        technologies: ['java advanced', 'mysql', 'tomcat server'],
        period: '5 months',
      },
      {
        id: 3,
        name: 'Third Eye',
        description:
          'python based project, having traffic on roads and how people are unserious about helmets in mind, everyone can upload photo or video about the crime being happen. crime means trippsy || without helmet riding the system detects this kinds and automatically reads nuber plate of vehicle whos commiting crime, also finds who the owner of this vehicle. by all means try to make a desciplined generation of bike riders',
        technologies: ['python', 'django', 'flask', 'postgresql'],
        period: '5.5 months',
      },
      {
        id: 4,
        name: 'Online Heathcare System',
        description:
          'erlang based project, having patients heath in mind, any user who is taking medications in hospital which has implemented this system can communicate and share health data to their treating doctors  and make better use of system. doctors or nurses can take watch or treat on critical patients remotely.',
        technologies: [
          'erlang OTP',
          'postgresql',
          'elixir',
          'vanila javascript',
        ],
        period: '6 months',
      },
    ];
  }
}
