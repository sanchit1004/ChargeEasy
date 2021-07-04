import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../firebase/customer.service';
import { Customer, ChargeHistory } from '../firebase/Customer';

import { customer } from '../home/home.component';
//import { HomeComponent } from '../home/home.component';

import { cust_email } from '../home/home.component';
import { Validators, FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms'
import { MatSelectChange } from '@angular/material';

import { e } from '../firebase/firebase.service';

export var error_s : number; 

@Component({
  selector: 'app-charge-history',
  templateUrl: './charge-history.component.html',
  styleUrls: ['./charge-history.component.css']
})
export class ChargeHistoryComponent implements OnInit {

  history: ChargeHistory[];
  custs : Customer[];

  //cust_email_for_history = "nothing";
  cust_email_for_history = cust_email ;
  error_s = e;

  //slider_value : number;
  sliderValue;

  rateControl : FormGroup;

  selectedCar;
  battery_percent;

  cars : String[] =['Tata Nexon EV', 'Tata Tigor EV', 'MG ZS EV', 'MG Hector', 'MG Hector Plus', 'Toyota Vellfire', 'Hyundai Kona', 'Mahindra E Verito', 
          'Storm motors R3', 'Mercedes Benz EQC','Ather 450'];

  single_history : ChargeHistory = {
    Battery_Charge : '',
    Car : '',
    Date : '',
    Time : ''
  };


  constructor(private customerService : CustomerService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customers => {
      //this.history = customers;
      console.log(customers);
    });

    //this.cust_email_for_history = this.hm.getEmail();

    //this.cust_email_for_history = this.customerService.getEmail();
    console.log(this.error_s);
    console.log(this.cust_email_for_history);
    this.customerService.getChargeHistory(this.cust_email_for_history).subscribe(charges => {
        this.history = charges;
        console.log(charges);
    });

    //this.rateControl = new FormControl("", [Validators.max(100), Validators.min(0)]);
    
    //console.log(this.slider_value);
    //console.log(this.sliderValue);

    this.rateControl = this.formBuilder.group({
      battery: ["", [Validators.max(100), Validators.min(0)]]
    });

  }

  selectCar(event: MatSelectChange) {
    this.selectedCar = {
      value : event.value,
      text : event.source.triggerValue
    };   
      console.log(this.selectedCar.text);
  }

  add(){
    console.log(this.selectedCar.text);
    console.log(this.battery_percent);
    
    var now = new Date();
    var id = Date.now().toString();
    console.log(Date.now());
    console.log(now.toTimeString());
    console.log(now.toDateString());

    this.single_history.Battery_Charge = this.battery_percent as string;
    this.single_history.Car = this.selectedCar.text;
    this.single_history.Date = now.toDateString();
    this.single_history.Time = now.toTimeString();

    this.customerService.chargeCollection.doc(id).set({
      ID : id,
      Battery_Charge : this.single_history.Battery_Charge,
      Car : this.single_history.Car,
      Date : this.single_history.Date,
      Time : this.single_history.Time
    })
  }

  public hasError = (controlName: string, errorName: string)=>{
    return this.rateControl.controls[controlName].hasError(errorName);
  }


}
