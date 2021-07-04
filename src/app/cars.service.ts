import { Injectable } from '@angular/core';
import { HashTable } from 'angular-hashtable';
export { carsdata };
export { carsSpeed };

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }
}

const cars : String[] =['Tata Nexon EV', 'Tata Tigor EV', 'MG ZS EV', 'Hyundai Kona', 'Mahindra E Verito', 
          'Storm motors R3', 'Mercedes Benz EQC', 'Jaguar I-pace'];

const carsdata = new HashTable<string,number>();
carsdata.put('Tata Nexon EV',312);
carsdata.put('Tata Tigor EV',142);
carsdata.put('MG ZS EV',340);
carsdata.put('Hyundai Kona',452);
carsdata.put('Mahindra E Verito',110);
carsdata.put('Storm motors R3', 200);
carsdata.put('Mercedes Benz EQC',450);
carsdata.put('Jaguar I-pace',470);
carsdata.put('Ather 450',107);

const carsSpeed = new HashTable<string,number>();
carsSpeed.put('Tata Nexon EV',120);//
carsSpeed.put('Tata Tigor EV',80);//
carsSpeed.put('MG ZS EV',147);//
carsSpeed.put('Hyundai Kona',165);//
carsSpeed.put('Mahindra E Verito',86);//
carsSpeed.put('Storm motors R3', 80);//
carsSpeed.put('Mercedes Benz EQC',180);//
carsSpeed.put('Jaguar I-pace',200);
carsSpeed.put('Ather 450',80)
