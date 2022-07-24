import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { TherapeuticsService } from './service/therapeutics.service';

@Component({
  selector: 'app-therapeutics',
  templateUrl: './therapeutics.page.html',
  styleUrls: ['./therapeutics.page.scss'],
})
export class TherapeuticsPage implements OnInit {
  therapeutics: any;
  therapeuticsLocated = 0;
  constructor(private therapeuticsService: TherapeuticsService, private locationService: LocationService) { }

  ngOnInit() {
    this.therapeuticsService.getCovidTherapeuticsDataByZipcode(this.locationService.getZipcode()).subscribe((res)=>{
      this.therapeutics = res;
      console.log(res);
      this.therapeuticsLocated = this.therapeutics.length;
    });
  }
  setTherapeutic(therapeutic: any): void {
    console.log(therapeutic);
  }
}
