import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  zipcode = '';
  state = '';
  city = '';
  // hospitalGeoreference: any;
  // treatGeopoint: any;
  // therapeuticGeocodedAddress: any;
  hospitalLocation: object;
  treatLocation: object;
  therapeuticsLocation: object;
  hospitalLatitude;
  hospitalLongitude;
  treatLatitude;
  treatLongitude;
  therapeuticsLatitude;
  therapeuticsLongitude;
  hospitalInfo;
  treatInfo;
  therapeuticsInfo;
  constructor() { }

  setState(state: string): void {
    this.state = state;
  }
  setZipcode(zipcode: string): void {
    this.zipcode = zipcode;
  }
  setCity(city: string): void {
    this.city = city;
  }
  getState(): string {
    return this.state;
  }
  getZipcode(): string {
    return this.zipcode;
  }
  getCity(): string {
    return this.city;
  }
  getHospitalLocation(): object {
    return this.hospitalLocation;
  }
  getHospitalLatitude(): number {
    return this.hospitalLatitude;
  }
  getHospitalLongitude(): number {
    return this.hospitalLongitude;
  }
  getTherapeuticsLatitude(): number {
    return this.therapeuticsLatitude;
  }
  getTherapeuticsLongitude(): number {
    return this.therapeuticsLongitude;
  }
  getTreatLatitude(): number {
    return this.treatLatitude;
  }
  getTreatLongitude(): number {
    return this.treatLongitude;
  }
  getTreatLocation(): object {
    return this.treatLocation;
  }
  getTherapeuticsLocation(): object {
    return this.therapeuticsLocation;
  }
  setHospitalLocation(latitude, longitude): void {
    this.hospitalLatitude = latitude;
    this.hospitalLongitude = longitude;
  }
  setTreatLocation(latitude, longitude): void {
    this.treatLatitude = latitude;
    this.treatLongitude = longitude;
  }
  setTherapeuticsLocation(latitude, longitude): void {
    this.therapeuticsLatitude = latitude;
    this.therapeuticsLongitude = longitude;
  }
  getHospitalInfo(): string {
    return this.hospitalInfo;
  }
  getTreatInfo(): string {
    return this.treatInfo;
  }
  getTherapeuticsInfo(): string {
    return this.therapeuticsInfo;
  }
  setHospitalInfo(hospitalInfo): void {
    this.hospitalInfo = hospitalInfo;
  }
  setTreatInfo(treatInfo): void {
    this.treatInfo = treatInfo;
  }
  setTherapeuticsInfo(therapeuticsInfo): void {
    this.therapeuticsInfo = therapeuticsInfo;
  }
}
