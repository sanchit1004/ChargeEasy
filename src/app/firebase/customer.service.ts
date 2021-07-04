import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Customer } from './Customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import{ customer } from '../home/home.component';

import { ChargeHistory } from './Customer';
import { getMaxListeners } from 'process';

import { cust_email } from '../home/home.component';

//import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerCollection : AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;
  customerDoc : AngularFirestoreDocument<Customer>;

  //custdelete = customer;

  chargeCollection : AngularFirestoreCollection<ChargeHistory>;
  charges : Observable<ChargeHistory[]>;
  //cust: Customer = customer;

  constructor( public afs: AngularFirestore ) {
    //this.customers = this.afs.collection('Customers').valueChanges();
    this.customerCollection = this.afs.collection('Customers');
    this.customers = this.customerCollection.snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Customer;
        //data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.chargeCollection = this.afs.collection('Customers').doc(cust_email).collection('ChargeHistory', ref => ref.orderBy('ID','desc'));
    this.charges = this.chargeCollection.snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as ChargeHistory;
        //data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

    getCustomers(){
      return this.customers;
   }

    addCustomers(customer : Customer){
      //this.customerCollection.add(customer);
      //console.log(customer.Email);
      this.customerCollection.doc(customer.Email).set({
        Username: customer.Username,
        Email: customer.Email,
        Cars: customer.Cars
      })
   }

    getChargeHistory(cust_email : string){
      this.chargeCollection = this.afs.collection('Customers').doc(cust_email).collection('ChargeHistory',ref => ref.orderBy('ID','desc'));
      this.charges = this.chargeCollection.snapshotChanges()
      .pipe(map(changes =>{
        return changes.map(a => {
          const data = a.payload.doc.data() as ChargeHistory;
          //data.id = a.payload.doc.id;
          return data;
        });
      }));
      return this.charges;
    }
    



    /*getEmail(){
      return cust_email;
      console.log(cust_email);
    }*/

   /*deleteCustomers(customer : Customer){
      console.log(this.custdelete);
      console.log("Customer ID ="+this.custdelete.Email);
      this.customerDoc = this.afs.doc('Customers/${this.custdelete.Email}');
      this.customerDoc.delete();
   }*/
}


