import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zipcodepicker',
  templateUrl: './zipcodepicker.page.html',
  styleUrls: ['./zipcodepicker.page.scss'],
})
export class ZipcodepickerPage implements OnInit {

  ZipCode: string;

  constructor() { }

  ngOnInit() {
  }

  ZipCodeSubmit(): void {
    console.log(this.ZipCode);
  }
  
}
