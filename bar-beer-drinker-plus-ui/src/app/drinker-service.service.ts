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

export interface Items {
  type: string;
  Name: string;
  price: number;
}

export interface BeerCount{
  Name: string;
  numBought: number;
}

export interface Spending{
  Date: string;
  TotalSpent: number;
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

   getItemsPurchased(id : string, customer: string) {
    return this.http.get<Items[]>('/api/drinker/' + customer + '/' + id );
   }

   getTopSellingBeer(customer: string){
    return this.http.get<BeerCount[]>('api/top-beers/' + customer);
   }

   getSpendingPerDay(customer: string){
    return this.http.get<Spending[]>('/api/total-spending-day/' + customer);
   }


}