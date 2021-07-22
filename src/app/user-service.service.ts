import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
  getAlldata() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  public reguser(user: User){
    return this.http.post("http://localhost:8080/save-user", user, {responseType : "text" as "json"});
  }

  public loginuser(user:User){
    return this.http.post("http://localhost:8080/login",user,{responseType : "text" as "json"});
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

  public getBlogs(blogtype){
    return this.http.get<Blog[]>("http://localhost:8080/all"+ '?blogtype=' + blogtype);
  }

  public deleteBlogs(id){
    return this.http.get("http://localhost:8080/deleteblog/"+id);
  }

  
  
}


