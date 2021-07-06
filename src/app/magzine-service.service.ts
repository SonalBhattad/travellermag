import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Magzine } from '../../../travellermag-gamma/src/app/magzine';

@Injectable({
  providedIn: 'root'
})
export class MagzineServiceService {
  regMag: any;

  constructor(private http : HttpClient) { }

  public regmaguser(magzine: Magzine){
    return this.http.post("http://localhost:8080/save-maz", magzine, {responseType : "text" as "json"});
}
public getMagzine(){
  return this.http.get("http://localhost:8080/all-magusers");
}

public deleteUser(mag_name){
  return this.http.delete("http://localhost:8080/deletemag/"+mag_name);
}
}
