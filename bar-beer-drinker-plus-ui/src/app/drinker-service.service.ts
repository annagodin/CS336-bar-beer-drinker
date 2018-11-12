import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Transactions {
  bar: string;
  ID: string;
  date: string;
  day: string;
  time: string;
  tip: string
  total_cost: string
}

export interface Drinker {
  customer : string
}

@Injectable({
  providedIn: 'root'
})
export class DrinkerServiceService {

  constructor(
    public http: HttpClient
  ) { }
  
   getTransactions(customer: string) {
     return this.http.get<Transactions[]>('/api/drinker/' + customer );
   }

   getCustomers() {
     return this.http.get<Drinker[]>('api/drinker');
   }


   

  // getMenu(bar: string) {
  //   return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  // }

  // getFrequentCounts() {
  //   return this.http.get<any[]>('/api/frequents-data');
  // }

}