import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { SpeedCalcsComponent } from "./speed-calcs/speed-calcs.component";
import { PaymentComponent } from "./payment/payment.component";
import { ChargeHistoryComponent } from './charge-history/charge-history.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "/Home",
    pathMatch: 'full'
  },
  { path: 'Home' , component:HomeComponent },
  { path: 'Map' , component:MapComponent},
  { path: 'Speed Calculation' , component:SpeedCalcsComponent}, 
  { path: 'Payment', component:PaymentComponent},
  { path: 'Charge History', component:ChargeHistoryComponent}
  //{ path: 'https://pages.razorpay.com/pl_H0KG7kJH04OCUT/view', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
