import { Component, OnInit } from '@angular/core';
import { ManfDetails } from '../manufacturer.service';
import { ManufacturerService } from '../manufacturer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manufacturer-details',
  templateUrl: './manufacturer-details.component.html',
  styleUrls: ['./manufacturer-details.component.css']
})
export class ManufacturerDetailsComponent implements OnInit {

  sales : ManfDetails[]
  manf : string

  constructor(private manfService: ManufacturerService, private route: ActivatedRoute) { 

    this.route.paramMap.subscribe((paramMap) => {
    this.manf = paramMap.get('manf');

    this.manfService.getManfSales(this.manf).subscribe(
      data => {
        this.sales = data;
      }
    );
  });
}

  ngOnInit() {

  }

}

