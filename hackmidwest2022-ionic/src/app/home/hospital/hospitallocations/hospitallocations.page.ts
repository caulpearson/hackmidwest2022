import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-hospitallocations',
  templateUrl: './hospitallocations.page.html',
  styleUrls: ['./hospitallocations.page.scss'],
})
export class HospitallocationsPage implements OnInit {
  locations: any;
  constructor(private locationsService: LocationService, private hospitalService: HospitalService) { }

  ngOnInit() {
    this.hospitalService.getCovidHospitalDataByStateAndCity(
      this.locationsService.getState(),
      this.locationsService.getCity()
    ).subscribe((res)=> {
      this.locations = res;
    });
  }
  setLocation(latitude, longitude, name, bedCount): void {
    console.log(latitude);
    console.log(longitude);
    this.locationsService.setHospitalLocation(latitude,longitude);
    const infoStr = name + ' - ' + bedCount + ' beds';
    console.log(infoStr);
    this.locationsService.setHospitalInfo(infoStr);
  }
}
