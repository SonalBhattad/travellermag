import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Blog } from './blog';

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
    return this.http.delete("http://localhost:8080/delete/"+username);
  }

  public getProfile(){
    return this.http.get("http://localhost:8080/profile");
  }
  public addBlog(Blog: Blog){
    return this.http.post("http://localhost:8080/save-blog",Blog, {responseType : "text" as "json"});
  }

  public getBlogs(): Observable<Blog[]>{
    return this.http.get<Blog[]>("http://localhost:8080/all");
  }

  public deleteBlogs(id: string | number){
    return this.http.get("http://localhost:8080/deleteblog/"+id);
  }
}


