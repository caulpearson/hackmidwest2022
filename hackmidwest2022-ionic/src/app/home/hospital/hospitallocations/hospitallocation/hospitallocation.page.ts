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
  //@ViewChild('map') mapRef: ElementRef<HTMLElement>;
  @ViewChild('map') mapRef: ElementRef;

  location: any;
  latitude: number;
  longitude: number;
  hospitalLocationInfo = '';
  constructor(private locationService: LocationService) {
    CapacitorGoogleMaps.initialize({
      key: environment.mapsKey
    });
   }

  ngOnInit() {
    // this.createMap();
    // this.location = this.locationService.getHospitalLocation();
    // this.latitude = thi;
    // this.longitude = parseFloat(this.location.georeference.coordinates[1].toFixed(1));
  }
  ionViewWillEnter(){
    this.latitude = this.locationService.getHospitalLatitude();
    this.longitude = this.locationService.getHospitalLongitude();

  }
  async ionViewDidEnter(){
    this.hospitalLocationInfo = this.locationService.getHospitalInfo();
    this.createMap(this.latitude, this.longitude);
  }
//   ionViewDidEnter() {
//     const boundingRect = this.mapRef.nativeElement.getBoundingClientRect() as DOMRect;

//     CapacitorGoogleMaps.create({
//       width: Math.round(boundingRect.width),
//       height: Math.round(boundingRect.height),
//       x: Math.round(boundingRect.x),
//       y: Math.round(boundingRect.y),
//       latitude: -33.86,
//       longitude: 151.20,
//       zoom: 12
//     });

//     CapacitorGoogleMaps.addListener("onMapReady", async function() {

//       /*
//         We can do all the magic here when map is ready
//       */

//       CapacitorGoogleMaps.addMarker({
//         latitude: -33.86,
//         longitude: 151.20,
//         title: "Custom Title",
//         snippet: "Custom Snippet",
//       });

//       CapacitorGoogleMaps.setMapType({
//         "type": "normal"
//       })
//     })
// }
  // ngAfterViewInit(){

  // }
   async createMap(latitude: number, longitude: number){
  //   this.newMap = await GoogleMap.create({
  //     id: 'this-map',
  //     apiKey: environment.mapsKey,
  //     element: this.mapRef.nativeElement,
  //     config: {
  //       center: {
  //         lat: +latitude,
  //         lng: +longitude
  //       },
  //       zoom: 8
  //     },
  //   });
  //   this.newMap.addMarker({
  //     coordinate: {
  //       lat: latitude,
  //       lng: longitude
  //     },
  //     title: 'Marker'
  //   });

  // await CapacitorGoogleMaps.initialize({
  //   key: environment.mapsKey,
  //   //devicePixelRatio: window.devicePixelRatio, // this line is very important
  // });

  const boundingRect = this.mapRef.nativeElement.getBoundingClientRect() as DOMRect;

    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      latitude: +latitude,
      longitude: +longitude,
      zoom: 12
    });

    CapacitorGoogleMaps.addListener('onMapReady', async () => {

      CapacitorGoogleMaps.addMarker({
        latitude: +latitude,
        longitude: +longitude,
        title: 'Hospital Location',
        snippet: '',
      });

      CapacitorGoogleMaps.setMapType({
        // eslint-disable-next-line quote-props
        type: 'normal'
      });
    });
   }
   ionViewDidLeave() {
    CapacitorGoogleMaps.close();
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
   //});
}
