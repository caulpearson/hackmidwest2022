import { Component, OnInit } from '@angular/core';
import { FormControl }  from '@angular/forms';

@Component({
  selector: 'app-zipcodepicker',
  templateUrl: './zipcodepicker.page.html',
  styleUrls: ['./zipcodepicker.page.scss'],
})
export class ZipcodepickerPage implements OnInit {

  ZipCodeControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  ZipCodeSubmit(): void {
    console.log(this.ZipCodeControl.value);
  }
  
}
