import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

declare var Razorpay : any;

import { live_lng, live_lat } from '../map/map.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount : number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  options = {
    //"key": "rzp_test_8i5caPEgywULDS", // Enter the Key ID generated from the Dashboard
    "key": "rzp_test_E1610KrtRwVwy6",
    "amount": "", //"50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "ChargeEasy",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", 
    //"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    /*"prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },*/
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  };

  rzp1 : any;
  pay(){
    //var windowopen = window.open('https://pages.razorpay.com/pl_H0KG7kJH04OCUT/view');
    var windowopen = window.open('https://rzp.io/l/KPZEayb');
    console.log("not opening");
    console.log(live_lng,live_lat);
    //this.rzp1 = new Razorpay(this.options);
    //this.rzp1.open();
  }
}
