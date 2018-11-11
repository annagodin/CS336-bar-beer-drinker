import { Component, OnInit } from '@angular/core';
import { BeersService, BeerLocation } from '../beers.service';
import { ActivatedRoute } from '@angular/router';

import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerLocations: BeerLocation[];
  manufacturer: string;

  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');

      this.beerService.getBarsSelling(this.beerName).subscribe(
        data => {
          this.beerLocations = data;
        }
      );

      this.beerService.getBeerManufacturers(this.beerName)
        .subscribe(
          data => {
            this.manufacturer = data;
          }
        );

      this.filterOptions = [
        {
          'label': 'Low price first',
          'value': 'low price'
        },
        {
          'label': 'High price first',
          'value': 'high price'
        },
        {
          'label': 'Most frequented first',
          'value': 'high customer'
        },
        {
          'label': 'Least frequented first',
          'value': 'low customer'
        }
      ];
    });
  }


  ngOnInit() {
  }

  sortBy(event) {
    if (event === 'low price') {
      this.beerLocations.sort((a, b) => {
        return a.Price - b.Price;
      });
    } else if (event === 'high price') {
      this.beerLocations.sort((a, b) => {
        debugger;
        return b.Price - a.Price;
      });
    } else if (event === 'low customer') {
      this.beerLocations.sort((a, b) => {
        return a.Customers - b.Customers;
      });
    } else if (event === 'high customer') {
      this.beerLocations.sort((a, b) => {
        return b.Customers - a.Customers;
      });
    }
  }



}