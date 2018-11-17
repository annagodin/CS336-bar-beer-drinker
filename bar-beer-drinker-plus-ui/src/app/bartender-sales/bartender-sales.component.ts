import { Component, OnInit } from '@angular/core';
import { SaleDetails, BartenderService } from '../bartender.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bartender-sales',
  templateUrl: './bartender-sales.component.html',
  styleUrls: ['./bartender-sales.component.css']
})
export class BartenderSalesComponent implements OnInit {

  beers_sold: SaleDetails[];
  bartender : string
  bar : string
  date : string
  start : string
  end : string

   constructor(
   private bartenderService: BartenderService,
   private route: ActivatedRoute) {
 
     this.route.paramMap.subscribe((paramMap) => {
       this.bartender = paramMap.get('bartender');

       this.route.paramMap.subscribe((paramMap) => {
        this.bar = paramMap.get('bar');

        this.route.paramMap.subscribe((paramMap) => {
          this.date = paramMap.get('date');
          this.date = this.convertDate(this.date);

          this.route.paramMap.subscribe((paramMap) => {
            this.start = paramMap.get('start');

            this.route.paramMap.subscribe((paramMap) => {
              this.end = paramMap.get('end');
 
       this.bartenderService.getSales(this.bartender, this.bar, this.date, this.start, this.end).subscribe(
         data => {
           this.beers_sold = data;
         }
       );
     });
 });
});
});
});
}

convertDate(temp : string) {
   temp.replace(/-/g, "\/");
  return temp;
}


  ngOnInit() {
  }

}
