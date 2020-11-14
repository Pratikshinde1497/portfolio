import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User.Model';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
const myEmail = 'pratikshinde1497@gmail.com' 

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }

  send(userData: User) {
    return this._http.post('https://formspree.io/f/mpzorgdz', { name: userData.name, replyTo: userData.email, message: { 'contactWay' : userData.contactWay , "actual msg": userData.msg,} }, { headers: headers });
  }
}
