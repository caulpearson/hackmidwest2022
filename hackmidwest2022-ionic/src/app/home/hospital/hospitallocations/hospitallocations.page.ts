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

}
