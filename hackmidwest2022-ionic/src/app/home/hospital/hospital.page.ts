import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { HospitalService } from './service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {

  constructor(private hospitalService: HospitalService, private locationService: LocationService) { }

  ngOnInit() {
    // this.hospitalService.getCovidHospitalDataByState(this.locationService.getState()).subscribe(res=>{

    // });
  }

}
