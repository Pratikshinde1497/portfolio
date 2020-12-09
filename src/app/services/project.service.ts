import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private _fireDb: AngularFirestore) {
    this._fireDb.collection('/projects').get().forEach(res=> res.docs.forEach(doc=> {
      this.data.push(doc.data())
    }));
    this._fireDb.collection('/skills').get().forEach(res=> res.docs.forEach(doc=> {
        this.skills.push(doc.data())
    }));
  }
  data = [];
  skills = [];

  getProjects() {
    return this.data;
  }

  getProjectByName(name: string) {
    return this.data.find((obj)=> obj.name === name);
  }

  getSkills() {
    return this.skills;
  }
}
