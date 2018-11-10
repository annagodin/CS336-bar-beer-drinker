import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {

  // bars: Bar[];

  // constructor(
  //   public barService: BarsService
  // ) { 
  //   this.getBars();
  // }

  ngOnInit() {
  }
 
  // getBars(){
  //   this.barService.getBars().subscribe(
  //     data =>  {
  //         this.bars = data;
  //     },
  //     error => {
  //         alert('could not retrieve a list of bars');
  //     }
  //   );
  //   }

}
  


