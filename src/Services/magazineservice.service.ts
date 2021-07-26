import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Magazine } from 'src/Classes/magazine';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagazineserviceService {

  constructor(private http : HttpClient) { }

public regMag(Magazine: Magazine){
    return this.http.post("http://localhost:8080/savemag", Magazine);
}

public getMagazine():Observable<Magazine[]>{
  return this.http.get<Magazine[]>("http://localhost:8080/all-magazines");
}

public deleteMag(magid){
  return this.http.delete("http://localhost:8080/deletemag/"+magid);
}

}