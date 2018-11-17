import { Component, OnInit } from '@angular/core';
import { Analytics, BartenderAnalyticsService } from '../bartender-analytics.service';

@Component({
  selector: 'app-bartender-analytics',
  templateUrl: './bartender-analytics.component.html',
  styleUrls: ['./bartender-analytics.component.css']
})
export class BartenderAnalyticsComponent implements OnInit {

  shifts : Analytics[]

  constructor(private analytics: BartenderAnalyticsService) {
  
    this.analytics.getShifts().subscribe(
       data => {
          this.shifts = data;
          }
        );
 }

  ngOnInit() {
  }

}
