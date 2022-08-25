import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { TherapeuticsService } from '../service/therapeutics.service';

@Component({
  selector: 'app-therapeuticslocations',
  templateUrl: './therapeuticslocations.page.html',
  styleUrls: ['./therapeuticslocations.page.scss'],
})
export class TherapeuticslocationsPage implements OnInit {
  locations: any;
  state = '';
  city = '';
  constructor(private locationsService: LocationService, private therapeuticsService: TherapeuticsService) { }

  ngOnInit() {
    this.therapeuticsService.getCovidTherapeuticsDataByStateAndCity(
      this.locationsService.getState(),
      this.locationsService.getCity()
    ).subscribe((res)=> {
      this.locations = res;
      this.state = this.locationsService.getState();
      this.city = this.locationsService.getCity();
    });
  }
  setLocation(latitude, longitude, providerName, orderLabel, coursesAvailable): void {
    console.log(latitude);
    console.log(longitude);
    this.locationsService.setTherapeuticsLocation(latitude, longitude);
    const infoStr = providerName + ' - ' + orderLabel + '(' + coursesAvailable + ' treatment courses available)';
    console.log(infoStr);
    this.locationsService.setTherapeuticsInfo(infoStr);
  }
}
