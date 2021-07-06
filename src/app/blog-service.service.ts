import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {Draft} from './artist/drafts/draft';
import { Blog } from './artist/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  constructor(private http : HttpClient) { }

  public addPost(Blog: Blog){
    return this.http.post("http://localhost:8080/save-data", Blog, {responseType : "text" as "json"});
  }

  public getPost():Observable<Blog[]>{
    return this.http.get<Blog[]>("http://localhost:8080/all")
  }

  public deletePost(id){
    return this.http.get("http://localhost:8080/delete/"+id)
  }

  public addDraft(draft: Draft){
    return this.http.post("http://localhost:8080/save-draft", draft, {responseType : "text" as "json"});
  }
 
}
