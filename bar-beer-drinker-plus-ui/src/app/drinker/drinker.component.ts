import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {

  // drinks: any[];
  // manufacturerOptions: SelectItem[];

  // originalBeersList: any[];

  // constructor(private beerService: BeersService) {
  //   this.beerService.getBeers().Ssubscribe(
  //     data => {
  //       this.drinks = data;
  //       this.originalBeersList = data;
  //     }
  //   );
  //   this.beerService.getBeerManufacturers().subscribe(
  //     data => {
  //       this.manufacturerOptions = data.map(manf => {
  //         return {
  //           label: manf,
  //           value: manf,
  //         };
  //       });
  //     }
  //   );
  // }

  ngOnInit() {
  }

  filterBeers(manufacturer: string) {
    this.drinks = this.originalBeersList;
    if (manufacturer) {
      this.drinks = this.originalBeersList.filter(beer => beer.manf === manufacturer);
    }
  }

}
  


