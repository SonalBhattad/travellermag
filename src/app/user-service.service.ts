import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  public reguser(user: User){
    return this.http.post("http://localhost:8080/save-user", user, {responseType : "text" as "json"});
  }

  public loginuser(user:User){
    return this.http.post("http://localhost:8080/login",user)
  }

  public getUser(){
    return this.http.get("http://localhost:8080/all-users")
  }

  public deleteUser(username){
    return this.http.get("http://localhost:8080/delete/"+username);
  }

  // public getProfile(){
  //   return this.http.get("http://localhost:8080/profile");
  // }
  
}


