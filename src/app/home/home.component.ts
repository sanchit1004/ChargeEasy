import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import { Validators, FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms'

import { FirebaseService } from '../firebase/firebase.service';

import { CustomerService } from '../firebase/customer.service';
import { Customer } from '../firebase/Customer';
//import { element } from 'protractor';

//import { Observable } from 'rxjs';

export var customer : Customer;
export var cust_email : string;

import { error_s } from '../map.service';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //for firebase storage
  customer: Customer = {
    Username : '',
    Email : '',
    Cars : []
  }

  submitted: boolean; 
  userForm: FormGroup;
  emailFormControl: FormControl;
  errorMatcher = new CrossFieldErrorMatcher();

  //firebase
  isSignedIn = false;
  e = error_s;

  cars : String[] =['Tata Nexon EV', 'Tata Tigor EV', 'MG ZS EV', 'MG Hector', 'MG Hector Plus', 'Toyota Vellfire', 'Hyundai Kona', 'Mahindra E Verito', 
          'Storm motors R3', 'Mercedes Benz EQC','Ather 450'];

  @Output() isLogout = new EventEmitter<void>()

  //email for charge history
  //cust_email : string;

  constructor(public formBuilder: FormBuilder, public firebaseService : FirebaseService,
              public customerService : CustomerService) {
    /*this.userForm = this.formBuilder.group({
      username: '',
      password: '',
      repassword: ''
    }, {
      validator: this.passwordValidator
    })*/
   }

  passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('repassword').value;
    console.log("working");

    return condition ? { passwordsDoNotMatch: true} : null;
  }

  ngOnInit() {
     
    console.log(this.customer.Email);
    
    if(this.firebaseService.isLoggedIn)
    { this.isSignedIn = true; }
    else this.isSignedIn = false;

    this.userForm = this.formBuilder.group({
      username: ['',[ Validators.required,
                      Validators.pattern(/^[A-Za-z0-9_@.]*$/),
                      Validators.maxLength(50)
                    ]
                ],
      password:['',[Validators.required,Validators.minLength(6)]],
      repassword: ['']
    },{
      
    });

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    
    //firebase
    /*if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
    */

    var now = new Date();
    var id = Date.now();
    console.log(id.toString());
    console.log(Date.now());
    console.log(now.toTimeString());
    console.log(now.toDateString());
    console.log(now.toString())
    
  }

  public hasError = (controlName: string, errorName: string)=>{
    return this.userForm.controls[controlName].hasError(errorName);
  }

  onSubmit(){
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    } 
    alert("Welcome =>" + this.userForm.controls['username'].value);
  }

  

  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    { this.isSignedIn = true }
    console.log("signup working");
    console.log(email);
    cust_email = <string>email;
    console.log("Cust_email is changing" + cust_email);

    /*this.customerService.afs.collection('Customers',ref => ref.where('Email', "==", this.customer.Email))
    .snapshotChanges().subscribe(res => {
      if(res.length > 0){
        console.log("Cockblock Bro");
      }
      else {
        if(this.customer.Username != '' && this.customer.Email != ''){
          this.customerService.addCustomers(this.customer);
        }  
      }
  }));*/

    this.customerService.afs.collection(`Customers`, ref => ref.where('Email', "==", this.customer.Email))
    .snapshotChanges().subscribe(res => {
      if (res.length > 0)
      {
        //console.log("Cockblock Bro");
      }
      else
      {
        if(this.customer.Username != '' && this.customer.Email != ''){
          this.customerService.addCustomers(this.customer);
        }
      }
    });
  }
  
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password);
    if(this.firebaseService.isLoggedIn)
    { this.isSignedIn = true;
      //this.customer.Email = '';
      //this.customer.Username = ''; 
      }
      else { this.isSignedIn = false; }
      console.log(this.isSignedIn);
    console.log(email);
    cust_email = <string>email;
    console.log("Cust_email is changing" + cust_email);
    console.log("Customer.Email changed to" + cust_email);
    console.log(this.e);
  }

  handleLogout(){
    this.isSignedIn = false;
    alert("Succesfully Logged out");
  }

  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }

  //Multi-Select Data Binding
  getValues(event: {
    isUserInput: any;
    source: { value: any; selected: any };
  }) {
    if (event.isUserInput) {
      if (event.source.selected === true) {
        console.log(event.source.value);
        this.customer.Cars.push(event.source.value);
        console.log(this.customer.Cars);
      } else {
        console.log(event.source.value + "Removed");
        this.customer.Cars.forEach((element,index) => {
          if(element==event.source.value){ this.customer.Cars.splice(index,1); }
        });
        console.log(this.customer.Cars);
      }
    }
  }
  
  //For sharing email
  getEmail(){
    return this.customer.Email;
  }

}

  
