export interface Customer{
  Username?:string;
  Email?:string;
  Cars?:string[];
}

export interface ChargeHistory{
  ID?:String;
  Battery_Charge?:string;
  Car?:string;
  Date?:string;
  Time?:string;
}