import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocationService } from 'src/app/service/location.service';
import { HospitalService } from './service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.page.html',
  styleUrls: ['./hospital.page.scss'],
})
export class HospitalPage implements OnInit {
  hospitals: any;
  state = '';
  hospitalsLocated = 0;
  cities = [];
  constructor(private hospitalService: HospitalService, private locationService: LocationService,
    private navCtrl: NavController) { }

  ngOnInit() {
    // this.hospitalService.getCovidHospitalDataByZipcode(this.locationService.getZipcode()).subscribe(res=>{
    //   this.hospitals = res;
    //   console.log(res);
    //   this.hospitalsLocated = this.hospitals.length;
    // });
    if(this.locationService.getState() === ''){
      this.navCtrl.navigateBack('/statepicker');
      return;
    }
    console.log(this.locationService.getState());
    this.hospitalService.getCovidHospitalDataByState(this.locationService.getState()).subscribe((res)=> {
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
      this.hospitals = res;
    });
  }
  setCity(city: any): void {
    console.log(city);
    this.locationService.setCity(city);
  }
}
