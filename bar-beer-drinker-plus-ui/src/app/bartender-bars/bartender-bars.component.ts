import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bartender-bars',
  templateUrl: './bartender-bars.component.html',
  styleUrls: ['./bartender-bars.component.css']
})
export class BartenderBarsComponent implements OnInit {

//   bars: Transactions[];
//   drinkerName : string

//   constructor(
//    private drinkerService: DrinkerServiceService,
//    private route: ActivatedRoute) {
 
//      this.route.paramMap.subscribe((paramMap) => {
//        this.drinkerName = paramMap.get('name');
 
//        this.drinkerService.getTransactions(this.drinkerName).subscribe(
//          data => {
//            this.transactions = data;
//          }
//        );
//      });
//  }

constructor(){}

  ngOnInit() {
  }

}
