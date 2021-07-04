import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from "../map.service";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { style } from '@angular/animations';
import { RoutesRecognized } from '@angular/router';
//import { environment } from '../environments/environment';
export var dest_dist  : number;
export var dest_dist_time : number;
export var live_lng;
export var live_lat;



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  public lat = 19.0760;
  public lng = 72.8777;
  zoom = 10       ;
  live_lng: any;
  live_lat: any; 
  public el: HTMLElement;
  locations: any;  
  //dest_dist:any ;
  //marker: mapboxgl.Marker

  constructor(private mapService: MapService) { }

  error(){
    alert("Location Needed");
  }

  successLocation(){
    
  }

  private initializeMap(){
        navigator.geolocation.getCurrentPosition(position => { 
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        var live_lat = position.coords.latitude;
        var live_lng = position.coords.longitude;
        this.map.flyTo({
          center: [live_lng,live_lat]
        })
        //this.el = document.createElement('div');
        //this.el.id = 'marker';
        //el.style.color = "blue";
        new mapboxgl.Marker()
        .setLngLat([live_lng,live_lat])
        .addTo(this.map);
        //.addEventListener
        var directions =  new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit:'metric',
          profile:'mapbox/driving-traffic'
        });
        directions.on("route", e => {
          // routes is an array of route objects as documented here:
          // https://docs.mapbox.com/api/navigation/#route-object
          let routes = e.route
      
          // Each route object has a distance property
          //var dest_coords = routes.map(r => r.destination);
          //console.log(dest_coords);
          var dest_dist_r =  routes.map(r => r.distance);
          var dest_dist_t = routes.map(r => r.duration);
          dest_dist = <number>dest_dist_r;
          dest_dist_time = <number>dest_dist_t;
          console.log(dest_dist_time as number);
          console.log((dest_dist as number));
          console.log(typeof dest_dist);
          //console.log("Route lengths", routes.map(r => r.distance))
      })
        this.map.addControl(directions, 'top-left');
        this.map.on('load',  function() {
        console.log(live_lng, live_lat);
        directions.setOrigin([live_lng,live_lat]);
        //directions.setDestinaion([11, 22]);
        //var dest_coords = directions.getDestination();
        //console.log(dest_coords);
        })
        //console.log(directions)
        //this.createMarker();
        },
        this.error,{ timeout:10000, enableHighAccuracy: true }
      )
      console.log(this.lat);
    //console.log(position.coords.latitude);
    this.buildMap()
  }
  

  buildMap(){
    console.log(this.lat);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng,this.lat]
    })
    const locations = this.mapService.geojson;
    for( let i in locations.features){
      for(let j in locations.features[i].geometry){
          this.lat = locations.features[i].geometry.coordinates[1];
          this.lng = locations.features[i].geometry.coordinates[0];
          //var cs:HTMLElement = document.createElement('div');
          //cs.className = 'marker';
          var popup = new mapboxgl.Popup({ offset:25}).setText(locations.features[i].title);
          new mapboxgl.Marker({ color: locations.features[i].properties['marker-color']})
          .setLngLat([this.lng,this.lat])
          .setPopup(popup).addTo(this.map);
      }
    }
    this.map.addControl(new mapboxgl.NavigationControl());
    
    //var MapboxDirections = require('@mapbox/mapbox-gl-directions');

    

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
      })
    );

  }

 /* createMarker():void{
    /*this.locations = this.mapService.geojson.features;
    this.locations.geometry.coordinates.forEach(function(coords){
      new mapboxgl.Marker({ color: 'black', rotation: 45 })
      .setLngLat(coords).addTo(map);
      
    })*/
    /*this.locations.forEach(function(marker: { geometry: { coordinates: mapboxgl.LngLatLike; }; }) {
      console.log(marker.geometry.coordinates[0]);
      console.log(marker.geometry.coordinates[1]);

      // create a HTML element for each feature
      //var el = document.createElement('div');
      //el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker({ color: 'black', rotation: 45 })
      .setLngLat([12.65147, 55.608166])
      //.setLngLat([marker.geometry.coordinates[0],marker.geometry.coordinates[1]])
      .addTo(this.map);
    });*/
  //}

  ngOnInit() {
    this.initializeMap();
  }

}
