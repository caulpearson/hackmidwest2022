import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { LocationService } from 'src/app/service/location.service';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-therapeuticslocation',
  templateUrl: './therapeuticslocation.page.html',
  styleUrls: ['./therapeuticslocation.page.scss'],
})
export class TherapeuticslocationPage implements OnInit {

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  location: any;
  latitude: number;
  longitude: number;
  therapeuticsLocationInfo = '';
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    // this.createMap();
    // this.location = this.locationService.getHospitalLocation();
    // this.latitude = thi;
    // this.longitude = parseFloat(this.location.georeference.coordinates[1].toFixed(1));
  }

  ionViewDidEnter(){
    this.therapeuticsLocationInfo = this.locationService.getTherapeuticsInfo();
    this.latitude = this.locationService.getTherapeuticsLatitude();
    this.longitude = this.locationService.getTherapeuticsLongitude();
    this.createMap(this.latitude, this.longitude);
  }
  async createMap(latitude: number, longitude: number){
    this.newMap = await GoogleMap.create({
      id: 'this-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: +latitude,
          lng: +longitude
        },
        zoom: 8
      },
    });
    this.newMap.addMarker({
      coordinate: {
        lat: +latitude,
        lng: +longitude
      },
      title: 'Marker'
    });
  }


}
