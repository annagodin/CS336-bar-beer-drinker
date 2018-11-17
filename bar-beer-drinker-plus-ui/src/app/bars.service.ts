import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Bar {
  Bar: string;
  City: string;
  License: string;
  Phone: string;
}

export interface BarMenuItem {
  name: string;
  type: string;
  manf: string;
  price: number;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public httpClient: HttpClient
    ) { }

    getBars(){
      return this.httpClient.get<Bar[]>('/api/bar');
    }

  getBar(bar: string) {
    return this.http.get<Bar>('/api/bar/' + bar);
  }

  getMenu(bar: string) {
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getFrequentCounts() {
    return this.http.get<any[]>('/api/frequents-data');
  }
}