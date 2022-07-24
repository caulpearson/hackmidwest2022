/* eslint-disable no-trailing-spaces */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { LocationService } from 'src/app/service/location.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hospitallocation',
  templateUrl: './hospitallocation.page.html',
  styleUrls: ['./hospitallocation.page.scss'],
})
export class HospitallocationPage implements OnInit {
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
    this.createMap(this.locationService.getHospitalLatitude(), this.locationService.getHospitalLongitude());
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


  // const newMap = await GoogleMap.create({
  //   id: 'my-map', // Unique identifier for this map instance
  //   element: mapRef, // reference to the capacitor-google-map element
  //   apiKey: apiKey, // Your Google Maps API Key
  //   config: {
  //     center: {
  //       // The initial position to be rendered by the map
  //       lat: 33.6,
  //       lng: -117.9,
  //     },
  //     zoom: 8, // The initial zoom level to be rendered by the map
  //   },
  // });
}
