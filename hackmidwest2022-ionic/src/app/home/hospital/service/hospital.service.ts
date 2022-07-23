/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  //https://healthdata.gov/dataset/COVID-19-Hospital-Data-Coverage-Detail/ieks-f4qs
  constructor(private http: HttpClient) { }
  getCovidHospitalData(): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/ieks-f4qs.json');
  }
  getCovidHospitalDataByState(state: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/ieks-f4qs.json?state='+state);
  }
  getCovidHospitalDataByZipcode(zipcode: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/ieks-f4qs.json?zip_code='+zipcode);
  }
}
