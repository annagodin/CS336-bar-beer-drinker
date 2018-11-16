import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Manufacturer {
  manf : string
}

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { }

  getManufacturers() {
    return this.http.get<Manufacturer[]>('/api/manufacturer');
  }


}
