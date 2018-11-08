import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Bar {
  Bar: string;
  City: string;
  License: string;
  Phone: string;
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

}
