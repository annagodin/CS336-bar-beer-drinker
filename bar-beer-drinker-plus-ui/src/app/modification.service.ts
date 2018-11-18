import { Injectable } from '@angular/core';

export interface Database{
  Name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  constructor() { }

  getBarCols(){
    var arr:string[]; 
    arr = ['Bars', 'city', 'phone', 'license'];
    return arr;
  }

  getBartendersCols(){
    var arr:string[]; 
    arr = ['Bartender', 'bar', 'day', 'shiftStart', 'ShiftEnd'];
    return arr;
  }

  getCustomersCols(){
    var arr:string[]; 
    arr = ['name', 'city', 'phone'];
    return arr;
  }

  getItemCols(){
    var arr:string[]; 
    arr = ['type', 'name', 'manufacturer', 'base'];
    return arr;
  }

  getFrequentsCols(){
    var arr:string[]; 
    arr = ['name', 'bar'];
    return arr;
  }

  getItemsByIdCols(){
    var arr:string[]; 
    arr = ['id', 'type', 'name', 'price'];
    return arr;
  }

  getLikesCols(){
    var arr:string[]; 
    arr = ['customer', 'beer'];
    return arr;
  }

  getMasterSellsCols(){
    var arr:string[]; 
    arr = ['bar', 'margin', 'name', 'type', 'base', 'price'];
    return arr;
  }

  getOpenHoursCols(){
    var arr:string[]; 
    arr = ['bar', 'day', 'open', 'close'];
    return arr;
  }

  getShiftHoursCols(){
    var arr:string[]; 
    arr = ['bar', 'Bar', 'day', 'open', 'close'];
    return arr;
  }

  getStoresCols(){
    var arr:string[]; 
    arr = ['bar', 'Beer', 'day', 'amount'];
    return arr;
  }

  getTransactionsCols(){
    var arr:string[]; 
    arr = ['Bartender', 'Bar', 'day', 'shiftStart', 'ShiftEnd'];
    return arr;
  }


}
