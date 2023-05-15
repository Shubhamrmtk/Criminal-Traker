import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral ={
    lat: 37.7749,
    lng:-122.4194
  }
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  zoomIn() {
    // if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    // if (this.zoom > this.options.minZoom) this.zoom--;
  }

}
