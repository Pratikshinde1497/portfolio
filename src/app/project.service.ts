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
          'Java based project, having college assignments in mind, teacher or students can upload and download assignments with speed of Light..!',
        technologies: ['java advanced', 'mysql', 'tomcat server'],
        img: './assets/images/assignments.jpg',
        period: '5 months',
      },
      // {
      //   id: 2,
      //   name: 'ChatBot',
      //   description:
      //     'java based project, having college admissions and day to day lifestyle of students in mind, teacher or students can  ask amy question related to syllabus, admissions, hollidays within period or lectures for today with speed of Sound..!',
      //   technologies: ['java advanced', 'mysql', 'tomcat server'],
      //   img: './assets/images/chatbot.png',
      //   period: '5 months',
      // },
      {
        id: 3,
        name: 'Third Eye',
        description:
          'Python based project, having traffic on roads and peoples life in mind, people can upload photo or video. crime means trippsy || without helmet riding the system detects and reads nuber plate of vehicle whos commiting crime, finds who the owner of vehicle.',
        technologies: ['python', 'django', 'flask', 'postgresql'],
        img: './assets/images/cameras.jpg',
        period: '5.5 months',
      },
      {
        id: 4,
        name: 'Online Heathcare System',
        description:
          'Erlang based project, having patients heath in mind, any user who is taking medications in hospital which has implemented this system can communicate and share health data to their treating doctors  and make better use of system. doctors or nurses can take watch or treat on critical patients remotely.',
        technologies: [
          'erlang OTP',
          'postgresql',
          'elixir',
          'vanila javascript',
        ],
        img: './assets/images/healthcare.jpg',
        period: '6 months',
      },
    ];
  }
}
