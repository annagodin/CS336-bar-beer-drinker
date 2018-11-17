import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ranking, BartenderAnalyticsService } from '../bartender-analytics.service';

@Component({
  selector: 'app-bartender-ranking',
  templateUrl: './bartender-ranking.component.html',
  styleUrls: ['./bartender-ranking.component.css']
})
export class BartenderRankingComponent implements OnInit {

  ranking: Ranking[];
  day : string
  bar : string
  start : string
  end : string

   constructor(
   private analyticsService: BartenderAnalyticsService,
   private route: ActivatedRoute) {
 
     this.route.paramMap.subscribe((paramMap) => {
       this.day = paramMap.get('day');

       this.route.paramMap.subscribe((paramMap) => {
        this.bar = paramMap.get('bar');
          
          this.route.paramMap.subscribe((paramMap) => {
            this.start = paramMap.get('start');

            this.route.paramMap.subscribe((paramMap) => {
              this.end = paramMap.get('end');
 
       this.analyticsService.getRanking(this.bar, this.day, this.start, this.end).subscribe(
         data => {
           this.ranking = data;
         }
       );
     });
 });
});
});
}
 
  ngOnInit() {
  }


}
