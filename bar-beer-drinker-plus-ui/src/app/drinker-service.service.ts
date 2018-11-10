import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Transactions {
  name: string;
  license: string;
  city: string;
  phone: string;
  addr: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkerServiceService {

  constructor(
    public http: HttpClient
  ) { }


  // getBars() {
  //   return this.http.get<Bar[]>('/api/bar');
  // }

  // getBar(bar: string) {
  //   return this.http.get<Bar>('/api/bar/' + bar);
  // }

  // getMenu(bar: string) {
  //   return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  // }

  // getFrequentCounts() {
  //   return this.http.get<any[]>('/api/frequents-data');
  // }
}