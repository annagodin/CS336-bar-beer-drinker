import { Component, OnInit } from '@angular/core';
import {DrinkerServiceService, Drinker } from '../drinker-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {

  drinkers: Drinker[];

  constructor(
    public drinkerService: DrinkerServiceService
  ) { 
    this.getDrinkers();
  }

  ngOnInit() {
  }
 
  getDrinkers(){
    this.drinkerService.getCustomers().subscribe(
      data =>  {
          this.drinkers = data;
          debugger;
      },
      error => {
          alert('could not retrieve a list of drinkers');
      }
    );
  }
 
}
