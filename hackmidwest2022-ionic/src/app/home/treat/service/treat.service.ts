/* eslint-disable @typescript-eslint/ban-types */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatService {

  //https://healthdata.gov/dataset/COVID-19-Hospital-Data-Coverage-Detail/ieks-f4qs
  constructor(private http: HttpClient) { }
  getCovidTreatmentData(): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/6m8a-tsjg.json');
  }
  getCovidTreatmentDataByState(state: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/6m8a-tsjg.json?state='+state);
  }
  getCovidTreatmentDataByZipcode(zipcode: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/6m8a-tsjg.json?zip='+zipcode);
  }
}
