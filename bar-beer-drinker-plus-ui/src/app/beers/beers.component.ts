import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { SelectItem } from 'primeng/components/common/selectitem';


declare const Highcharts: any;

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: any[];
  manufacturerOptions: SelectItem[];
  top : any[];

  originalBeersList: any[];

  constructor(private beerService: BeersService) {
    this.beerService.getBeers().subscribe(
      data => {
        this.beers = data;
        this.originalBeersList = data;
      }
    );
    this.beerService.getBeerManufacturers().subscribe(
      data => {
        this.manufacturerOptions = data.map(manf => {
          return {
            label: manf,
            value: manf,
          };
        });
      }
    );
  }

  ngOnInit() {
  }

  filterBeers(manufacturer: string) {
    this.beers = this.originalBeersList;
    if (manufacturer) {
      this.beers = this.originalBeersList.filter(beer => beer.Manufacturer === manufacturer);
    }
  }

  onBeerGraph(event: any){
    console.log("It has been clicked: [", event, "]");
    
    this.beerService.getTopSellingBars(event).subscribe(
      data => {
        console.log("Data:" ,data);
        const bars = [];
        const counts = [];

        data.forEach(bar => {
          bars.push(bar.Bar);
          counts.push(bar.NumBought);
        });
        this.renderChartTopBars(bars, counts, event);
      }
    );

    this.beerService.getTopCustomerPerBeer(event).subscribe(
      data => {
        console.log("Data:" ,data);
        const customer = [];
        const counts = [];

        data.forEach(bar => {
          customer.push(bar.Customer);
          counts.push(bar.NumBought);
        });
        this.renderChartTopCustomerPerBeer(customer, counts, event);
      }
    );

    this.beerService.getBeerSaleDistribution(event).subscribe(
      data => {
        console.log("Data:" ,data);
        const hour = [];
        const counts = [];

        data.forEach(bar => {
          hour.push(bar.Hour);
          counts.push(bar.NumBought);
        });
        this.renderChartSaleDistribution(hour, counts, event);
      }
    );
  }

  renderChartSaleDistribution(bars: string[], counts: number[], event: any){
    Highcharts.chart('testing', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Time Distribution Of Sales Of: '+ event +'.'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Time'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Beers Purchased'
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

  renderChartTopCustomerPerBeer(bars: string[], counts: number[], event: any){
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Customers of: '+ event +'.'
      },
      subtitle: {
        text: 'Top 10 Customers Who Buy '+ event +'.'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bar'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Beers Purchased'
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
        text: 'Top Selling Bars That Sell: '+ event + '.'
      },
      subtitle: {
        text: 'Top 10 Bars Who Sell '+event+ 'The Most'
      },
      xAxis: {
        categories: bars,
        title: {
          text: 'Bar'
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