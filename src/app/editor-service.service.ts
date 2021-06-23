import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editor } from './artist/Editor';

@Injectable({
  providedIn: 'root'
})
export class EditorServiceService {
  constructor(private http : HttpClient) { }

  public addPost(Editor: Editor){
    return this.http.post("http://localhost:8080/save-data", Editor, {responseType : "text" as "json"});
  }

  public getPost(){
    return this.http.get("http://localhost:8080/all")
  }
 
}
