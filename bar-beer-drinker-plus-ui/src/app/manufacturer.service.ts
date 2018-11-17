import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Manufacturer {
  manf : string
}

export interface ManfDetails {
  city : string
  count : number
}

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { }

  getManufacturers() {
    return this.http.get<Manufacturer[]>('/api/manufacturer');
  }

  getManfSales(manf : string) {
    return this.http.get<ManfDetails[]>('/api/manufacturer/' + manf);
  }

  getManfLikes(manf : string) {
    return this.http.get<ManfDetails[]>('/api/manufacturer/' + manf + '/likes');
  }


}
