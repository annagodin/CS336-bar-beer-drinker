import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bartenders {
    bartender : string
    bar : string
    day : string
    shift_start : string
    shift_end : string 
}

export interface Shifts {
  Date : string
  day : string
  shift_start : string
  shift_end : string
}

export interface SaleDetails {
  beer : string
  count : number
}

@Injectable({
  providedIn: 'root'
})
export class BartenderService {

  constructor(
    public http: HttpClient
  ) { }

   getBartenders() {
     return this.http.get<Bartenders[]>('/api/bartender');
   }

   getShifts(bartender : string, bar: string) {
     return this.http.get<Shifts[]>('/api/bartender/' + bartender + '/' + bar);
   }

   getSales(bartender : string, bar: string, date : string, start : string, end : string) {
     return this.http.get<SaleDetails[]>('/api/bartender/' + bartender + '/' + bar + '/' + date + '/' + start + '/' + end);
   }



}
