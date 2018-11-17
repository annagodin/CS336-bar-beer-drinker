import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Analytics {
  bar : string
  start : string
  end : string
  day : string
}

export interface Ranking {
  bartender : string
  beer_count : string
}


@Injectable({
  providedIn: 'root'
})
export class BartenderAnalyticsService {

  constructor(private http: HttpClient) { }

  getShifts() {
    return this.http.get<Analytics[]>('/api/bartender/analytics');
  }

  getRanking(bar : string, day : string, start : string, end : string) {
    return this.http.get<Ranking[]>('/api/bartender/analytics/' + bar + '/' + day + '/' + '/' + start + '/' + end);
  }


}
