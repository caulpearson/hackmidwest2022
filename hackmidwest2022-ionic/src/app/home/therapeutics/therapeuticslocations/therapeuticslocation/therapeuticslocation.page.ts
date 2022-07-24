import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { LocationService } from 'src/app/service/location.service';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
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
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    // this.createMap();
    // this.location = this.locationService.getHospitalLocation();
    // this.latitude = thi;
    // this.longitude = parseFloat(this.location.georeference.coordinates[1].toFixed(1));
  }

  ionViewDidEnter(){
    this.createMap(this.locationService.getTherapeuticsLatitude(), this.locationService.getTherapeuticsLongitude());
  }
  async createMap(latitude: number, longitude: number){
    this.newMap = await GoogleMap.create({
      id: 'this-map',
      apiKey: 'AIzaSyDFE7V-XNJ_StdXytlOaOXX7HnOlMgDgjc',
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: 8
      },
    });
    this.newMap.addMarker({
      coordinate: {
        lat: latitude,
        lng: longitude
      },
      title: 'Marker'
    });
  }


}
