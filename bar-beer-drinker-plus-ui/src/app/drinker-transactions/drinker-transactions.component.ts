import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Transactions, DrinkerServiceService } from '../drinker-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-drinker-transactions',
  templateUrl: './drinker-transactions.component.html',
  styleUrls: ['./drinker-transactions.component.css']
})
export class DrinkerTransactionsComponent implements OnInit {

     transactions: Transactions[];
     drinkerName : string
  
     constructor(
      private drinkerService: DrinkerServiceService,
      private route: ActivatedRoute) {
    
        this.route.paramMap.subscribe((paramMap) => {
          this.drinkerName = paramMap.get('name');
    
          this.drinkerService.getTransactions(this.drinkerName).subscribe(
            data => {
              this.transactions = data;
            }
          );
        });
    }
      
    ngOnInit() {
    }
  }
   
  
  