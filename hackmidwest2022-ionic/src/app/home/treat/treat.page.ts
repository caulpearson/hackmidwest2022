import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocationService } from 'src/app/service/location.service';
import { TreatService } from './service/treat.service';

@Component({
  selector: 'app-treat',
  templateUrl: './treat.page.html',
  styleUrls: ['./treat.page.scss'],
})
export class TreatPage implements OnInit {
  treatments: any;
  state = '';
  treatmentsLocated = 0;
  cities = [];
  constructor(private locationService: LocationService, private treatmentService: TreatService,
    private navCtrl: NavController) { }

  ngOnInit() {
    // this.treatmentService.getCovidTreatmentDataByZipcode(this.locationService.getZipcode()).subscribe((res)=>{
    //   this.treatments = res;
    //   console.log(res);
    //   this.treatmentsLocated = this.treatments.length;
    // });

    if(this.locationService.getState() === ''){
      this.navCtrl.navigateBack('/statepicker');
      return;
    }
    console.log(this.locationService.getState());
    this.treatmentService.getCovidTreatmentDataByState(this.locationService.getState()).subscribe((res)=> {
      const lookup = {};
      const result = [];
      // eslint-disable-next-line guard-for-in
      for(const num in res){
        // eslint-disable-next-line @typescript-eslint/dot-notation, @typescript-eslint/quotes
        const city = res[num]['city'];
        if(!(city in lookup)){
          lookup[city] = 1;
          result.push(city);
        }
      }
      this.cities = result;
      console.log(this.cities);
      console.log(res);
      this.state = this.locationService.getState();
      this.treatments = res;
    });
  }
  setCity(city: any): void {
    console.log(city);
    this.locationService.setCity(city);
  }
}
