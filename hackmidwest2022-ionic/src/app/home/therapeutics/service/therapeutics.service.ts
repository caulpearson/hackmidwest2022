/* eslint-disable @typescript-eslint/ban-types */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TherapeuticsService {

  constructor(private http: HttpClient) { }
  getCovidTherapeuticsData(): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/rxn6-qnx8.json');
  }
  getCovidTherapeuticsDataByState(state: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/rxn6-qnx8.json?state_code='+state);
  }
  getCovidTherapeuticsDataByStateAndCity(state: String, city: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/rxn6-qnx8.json?state_code='+state+'&city='+city);
  }
  getCovidTherapeuticsDataByZipcode(zipcode: String): Observable<Object>{
    return this.http.get('https://healthdata.gov/resource/rxn6-qnx8.json?zip='+zipcode);
  }
}
