import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  zipcode = '';
  state = '';
  city = '';
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
}
