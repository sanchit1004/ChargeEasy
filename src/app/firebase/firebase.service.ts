import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
//import { error } from 'console';

import { customer } from '../home/home.component';
import { CustomerService } from './customer.service';

export var e : number;

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //customer : Customer;

  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth, public customerService: CustomerService) { }
  
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      e = 0;
      console.log(e);
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      e = 1;
      this.isLoggedIn = false;
    })
  }
  
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
      e = 0;
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      e = 1;
      this.isLoggedIn = false;
      //console.log("Hope it is deleted");
      //this.customerService.deleteCustomers(customer);      
    })
  }
  
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }

  //constructor() { }
}
