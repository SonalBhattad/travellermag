import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Magzine } from './magzine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagzineserviceService {

  constructor(private http : HttpClient) { }

public regMag(magzine: Magzine){
    return this.http.post("http://localhost:8080/save-maz", magzine, {responseType : "text" as "json"});
}

public getMagzine():Observable<Magzine[]>{
 return this.http.get<Magzine[]>("http://localhost:8080/all-magusers");
}

public deleteUser(mag_name){
  return this.http.delete("http://localhost:8080/deletemag/"+mag_name);
}


}
