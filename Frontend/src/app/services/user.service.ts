import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:3000'

  constructor(private http:HttpClient,private auth:AuthService) { }
  getUserDetails(){
    let auth_token = this.auth.getToken();

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${auth_token}`
      });

    const requestOptions = { headers: headers };
    if(true){
      return this.http.get(`${this.url}/userdetails`,requestOptions)
    }
    return throwError(new Error('Failed to login'));
  }
  getCriminals(){
    let auth_token = this.auth.getToken();

    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${auth_token}`
      });

    const requestOptions = { headers: headers };
    if(true){
      return this.http.get(`${this.url}/criminals`,requestOptions)
    }
    return throwError(new Error('Failed to login'));
  }
  }





