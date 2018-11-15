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
          console.log("id is: ", this.id)

          this.route.paramMap.subscribe((paramMap) => {
            this.drinkerName = paramMap.get('name');
            console.log("name is: ", this.drinkerName)
    
          this.drinkerService.getItemsPurchased(this.id, this.drinkerName).subscribe(
            data => {
              console.log("Data is:", data)
              this.items = data;
              console.log("items length is: ", this.items.length)
            }
          );
        });
    });
  }
      
    ngOnInit() {
    }
  }




