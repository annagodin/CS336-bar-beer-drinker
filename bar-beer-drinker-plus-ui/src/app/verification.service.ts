import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }

  verify_trans() {
    return this.http.get<any[]>('/api/verification/transactions');
  }

  verify_residency() {
    return this.http.get<any[]>('/api/verification/residency');
  }

  verify_price() {
    return this.http.get<any[]>('/api/verification/price');
  }

  verify_inventory() {
    return this.http.get<any[]>('/api/verification/inventory');
  }

  verify_shifts() {
    return this.http.get<any[]>('/api/verification/shifts');
  }


}
