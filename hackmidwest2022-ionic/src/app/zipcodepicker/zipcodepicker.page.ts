/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-zipcodepicker',
  templateUrl: './zipcodepicker.page.html',
  styleUrls: ['./zipcodepicker.page.scss'],
})
export class ZipcodepickerPage implements OnInit {
  form: FormGroup;
  ZipCode: string;

  constructor(private locationService: LocationService, private router: Router) {
    this.form = new FormGroup({
      ZipCode: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{5}'),
          Validators.minLength(5),
          Validators.maxLength(5)
      ])
    });
   }

  ngOnInit() {
  }

  ZipCodeSubmit(): void {

    if(!this.form.invalid){
      this.locationService.setZipcode(this.ZipCode);
      this.router.navigate(['/home/hospital']);
    } else {
      console.log('Errors on form');
    }
  }
}
