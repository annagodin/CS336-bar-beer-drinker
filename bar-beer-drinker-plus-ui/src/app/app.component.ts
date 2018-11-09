import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DrinkerComponent } from './drinker/drinker.component';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
@ViewChild(DrinkerComponent)

 routes: Routes = [
  { path: "drinker", component: DrinkerComponent, outlet: "Drinker" },

];

  drinker : DrinkerComponent

  title = 'bar-beer-drinker-plus-ui';
 


  
  ngAfterViewInit() {

  }
}
