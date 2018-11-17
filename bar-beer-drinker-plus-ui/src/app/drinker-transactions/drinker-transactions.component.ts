import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Transactions, DrinkerServiceService, BeerCount} from '../drinker-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { debug } from 'util';

declare const Highcharts: any;


@Component({
  selector: 'app-drinker-transactions',
  templateUrl: './drinker-transactions.component.html',
  styleUrls: ['./drinker-transactions.component.css']
})
export class DrinkerTransactionsComponent implements OnInit {

     transactions: Transactions[];
     drinkerName : string
     beerCount: BeerCount[];
  
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
        this.loadGraphs(this.drinkerName)
    }
      
    ngOnInit() {
    }

    loadGraphs(name: string){

      this.drinkerService.getTopSellingBeer(name).subscribe(
        data => {
           const beers = [];
           const counts = [];
  
           data.forEach(bar => {
             beers.push(bar.Name);
             counts.push(bar.numBought);
          });
          this.renderChartTopBars(beers, counts, name);
        }
      );

      this.drinkerService.getSpendingPerDay(name).subscribe(
        data => {
           const date = [];
           const counts = [];
  
           data.forEach(bar => {
             date.push(bar.Date);
             counts.push(bar.TotalSpent);

          });
          this.renderChartSpending(date, counts, name);
        }
      );
    
    }

      renderChartSpending(bars: string[], counts: number[], event: any){
        Highcharts.chart('container', {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Spending Per Day For Customer '+ event +'.'
          },
          subtitle: {
            text: 'This customer only became 21 two weeks ago, so only has 2 weeks of data'
          },
          xAxis: {
            categories: bars,
            title: {
              text: 'Dates'
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Total Cost'
            },
            labels: {
              overflow: 'justify'
            }
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          "series": [{
            data: counts
          }]
        });
      }

      renderChartTopBars(bars: string[], counts: number[], event: any) {
        Highcharts.chart('bargraph', {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Top Beers Purchased by '+event+ '.'
          },
          xAxis: {
            categories: bars,
            title: {
              text: 'Beers'
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Number of Beers Sold'
            },
            labels: {
              overflow: 'justify'
            }
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          series: [{
            data: counts
          }]
        });
      }

    }

  
   
  
  