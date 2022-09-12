import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { TreatService } from '../service/treat.service';

@Component({
  selector: 'app-treatlocations',
  templateUrl: './treatlocations.page.html',
  styleUrls: ['./treatlocations.page.scss'],
})
export class TreatlocationsPage implements OnInit {
  locations: any;
  city: string;
  state: string;

  constructor(private locationsService: LocationService, private treatService: TreatService) { }

  ngOnInit() {
    this.treatService.getCovidTreatmentDataByStateAndCity(
      this.locationsService.getState(),
      this.locationsService.getCity()
    ).subscribe((res)=> {
      this.locations = res;
      this.city = this.locations[0].city;
      this.state = this.locations[0].state;
    });
  }
  setLocation(latitude, longitude, providerName): void {
    console.log(latitude);
    console.log(longitude);
    this.locationsService.setTreatLocation(latitude,longitude);
    const infoStr = 'Treatment Center: '+ providerName;
    console.log(infoStr);
    this.locationsService.setTreatInfo(infoStr);
  }
}
