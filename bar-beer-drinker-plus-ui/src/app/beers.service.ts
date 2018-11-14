import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BeerLocation {
  Bar: string;
  Price: number;
  Customers: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  getBeers() {
    return this.http.get<any[]>('/api/beer');
  }

  getBarsSelling(beer: string) {
    return this.http.get<BeerLocation[]>(`/api/bars-selling/${beer}`);
  }

  getBeerManufacturers(beer?: string): any {
    if (beer) {
      return this.http.get<string>(`/api/beer-manufacturer/${beer}`);
    }
    return this.http.get<string[]>('/api/beer-manufacturer');
  }

  getTopSellingBars(beer: string): any{
    return this.http.get<string[]>(`/api/top-bars/${beer}`)
  }

  getTopCustomerPerBeer(beer: string): any{
    return this.http.get<string[]>(`api/top-customers/${beer}`)
  }

  getBeerSaleDistribution(beer: string): any{
    return this.http.get<string[]>(`/api/beer-sale-distribution/${beer}`)
  }
  

}