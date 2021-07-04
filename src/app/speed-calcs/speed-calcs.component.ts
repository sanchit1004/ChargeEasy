import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';
import { dest_dist } from '../map/map.component';
import { dest_dist_time } from '../map/map.component';
import { CarsService } from '../cars.service';
import { carsdata } from '../cars.service';
import { carsSpeed } from '../cars.service';

@Component({
  selector: 'app-speed-calcs',
  templateUrl: './speed-calcs.component.html',
  styleUrls: ['./speed-calcs.component.css']
})
export class SpeedCalcsComponent implements OnInit {
  battery_percent;
  total_distance = (dest_dist/1000).toFixed(2);
  total_time = dest_dist_time;
  timeString;
  hours; 
  minutes; 
  seconds;
  opti_speed : any = null;
  selectedCar;
  traffic_speed;
  display = false;
  opti_time;
  //traffic_time = dest_dist_time;

  //cars : String[] =['Tata Nexon EV', 'Tata Tigor EV', 'MG ZS EV', 'MG Hector', 'MG Hector Plus', 'Toyota Vellfire', 'Hyundai Kona', 'Mahindra E Verito', 
    //      'Storm motors R3', 'Mercedes Benz EQC'];

  cars : String[] =['Tata Nexon EV', 'Tata Tigor EV', 'MG ZS EV', 'Hyundai Kona', 'Mahindra E Verito', 
    'Storm motors R3', 'Mercedes Benz EQC', 'Jaguar I-pace','Ather 450'];

  
  constructor(public carsService: CarsService) { }

  ngOnInit() {
    console.log(dest_dist as number);
    console.log(typeof this.total_distance);
    console.log(this.total_time as number);
    console.log(typeof this.total_time);
   
    this.hours = Math.floor(this.total_time / 3600);
    console.log(this.hours);
    this.minutes = Math.floor((this.total_time - (this.hours * 3600)) / 60);
    console.log(this.minutes);
    this.seconds = this.total_time - (this.hours * 3600) - (this.minutes * 60);
    console.log(this.seconds.toFixed(2));
    this.seconds = this.seconds.toFixed(0);

    this.timeString = this.hours.toString().padStart(2, '0') + ':' + 
    this.minutes.toString().padStart(2, '0') + ':' + 
    this.seconds.toString().padStart(2, '0');

    console.log("dest_dist_time = " + (dest_dist_time as number)); 

    console.log(carsdata.getAll());
    console.log(carsSpeed.getAll());
  }

  secondsToHours(time){
    var hours,minutes,seconds,timeString;
    hours = Math.floor(time / 3600);
    //console.log(this.hours);
    minutes = Math.floor((time - (hours * 3600)) / 60);
    //console.log(this.minutes);
    seconds = time - (hours * 3600) - (minutes * 60);
    //console.log(this.seconds.toFixed(2));
    seconds = seconds.toFixed(0);

    timeString = hours.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + 
    seconds.toString().padStart(2, '0');

    console.log(timeString);

    return timeString;
  }

  calculate(){
    this.display = true;
    console.log(dest_dist as number);
    //this.battery_percent=20;
    console.log(this.selectedCar);
    var mileage = carsdata.get(this.selectedCar);
    console.log("Mileage = " + mileage);
    var battery_percent_per_km = mileage/100;
    var max_distance = this.battery_percent * battery_percent_per_km;
    console.log("Max_distance = " + max_distance);
    //var opti_speed;
    var max_speed = carsSpeed.get(this.selectedCar);
    console.log(max_speed);
    console.log("Factor = " + max_distance/(dest_dist/1000));
    var factor = max_distance/(dest_dist/1000);

    this.traffic_speed = ((dest_dist/1000)/(dest_dist_time/3600)).toFixed(2);

    if ((dest_dist/1000 > max_distance) && (factor > 0.2)){
      console.log(factor);
      console.log(max_speed);
      this.opti_speed = factor * max_speed;
      console.log(max_speed);
      this.opti_time = (dest_dist/1000)/this.opti_speed;
      console.log(this.opti_time);
      this.opti_time = this.secondsToHours(this.opti_time*3600);
      console.log(this.opti_speed);
      console.log(max_speed);
      this.opti_speed = this.opti_speed.toFixed(2);
      console.log(this.opti_speed);
    } else if(dest_dist/1000 < max_distance) {
      this.opti_speed = max_speed;
      //this.opti_speed = ((dest_dist/1000)/(dest_dist_time/3600)).toFixed(2);
      this.opti_time = (dest_dist/1000)/this.opti_speed;
      this.opti_speed = this.opti_speed.toFixed(2);
      this.opti_time = this.secondsToHours(this.opti_time*3600);
    }
    else {
      this.opti_speed = "Not possible. Charge your battery first";
    }
    console.log(this.opti_speed);
  }

}
