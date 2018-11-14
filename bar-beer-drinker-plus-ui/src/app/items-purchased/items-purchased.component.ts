import { Component, OnInit } from '@angular/core';
import { Items, DrinkerServiceService } from '../drinker-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-purchased',
  templateUrl: './items-purchased.component.html',
  styleUrls: ['./items-purchased.component.css']
})
export class ItemsPurchasedComponent implements OnInit {

  items : Items[];
  id : string
  drinkerName : string
  
     constructor(
      private drinkerService: DrinkerServiceService,
      private route: ActivatedRoute) {
    
        this.route.paramMap.subscribe((paramMap) => {
          this.id = paramMap.get('id');

          this.route.paramMap.subscribe((paramMap) => {
            this.drinkerName = paramMap.get('name');
    
          this.drinkerService.getItemsPurchased(this.id, this.drinkerName).subscribe(
            data => {
              this.items = data;
            }
          );
        });
    });
  }
      
    ngOnInit() {
    }
  }




