import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { ManufacturerService, Manufacturer } from '../manufacturer.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  manufacturer : Manufacturer[]

  constructor(private manfService: ManufacturerService) { 
    this.manfService.getManufacturers().subscribe(
      data => {
        this.manufacturer = data;
      }
    );
  }

  ngOnInit() {}
  
}

