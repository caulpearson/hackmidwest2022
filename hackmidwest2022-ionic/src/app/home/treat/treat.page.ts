import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { TreatService } from './service/treat.service';

@Component({
  selector: 'app-treat',
  templateUrl: './treat.page.html',
  styleUrls: ['./treat.page.scss'],
})
export class TreatPage implements OnInit {
  treatments: any;
  treatmentsLocated = 0;
  constructor(private locationService: LocationService, private treatmentService: TreatService) { }

  ngOnInit() {
    this.treatmentService.getCovidTreatmentDataByZipcode(this.locationService.getZipcode()).subscribe((res)=>{
      this.treatments = res;
      console.log(res);
      this.treatmentsLocated = this.treatments.length;
    });
  }
  setTreatment(treatment: any): void {
    console.log(treatment);
  }
}
