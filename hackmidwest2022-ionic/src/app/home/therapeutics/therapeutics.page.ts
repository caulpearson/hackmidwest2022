import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  state = '';
  cities = [];
  constructor(private therapeuticsService: TherapeuticsService, private locationService: LocationService,
    private navCtrl: NavController) { }

  ngOnInit() {
    // this.therapeuticsService.getCovidTherapeuticsDataByZipcode(this.locationService.getZipcode()).subscribe((res)=>{
    //   this.therapeutics = res;
    //   console.log(res);
    //   this.therapeuticsLocated = this.therapeutics.length;
    // });

    if(this.locationService.getState() === ''){
      this.navCtrl.navigateBack('/statepicker');
      return;
    }
    console.log(this.locationService.getState());
    this.therapeuticsService.getCovidTherapeuticsDataByState(this.locationService.getState()).subscribe((res)=> {
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
      this.therapeutics = res;
    });
  }
  setCity(city: any): void {
    console.log(city);
    this.locationService.setCity(city);
  }
}
