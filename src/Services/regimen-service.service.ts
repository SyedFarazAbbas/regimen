import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regimen } from '../Classes/Regimen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegimenServiceService {

  private baseurl : string = "https://localhost:7024/api/Regimen";

  constructor(private http : HttpClient) { }

  public GetAllRegimens() :Observable<Regimen[]>{
    return this.http.get<Regimen[]>(`${this.baseurl}/GetAllRegimens`);
  }
  
  public OnAddRegimen(regimen : Regimen) : Observable<string> {
    return this.http.post<string>(`${this.baseurl}/AddRegimen`, regimen);
  }

  public OnEditRegimen() : void {

  }

  public OnDeleteRegimen() : void {

  }

  
}
