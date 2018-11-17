import { Component, OnInit } from '@angular/core';
import { Shifts, BartenderService } from '../bartender.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bartender-shifts',
  templateUrl: './bartender-shifts.component.html',
  styleUrls: ['./bartender-shifts.component.css']
})
export class BartenderShiftsComponent implements OnInit {

  shifts: Shifts[];
  bartender : string
  bar : string

  constructor(
   private bartenderService: BartenderService,
   private route: ActivatedRoute) {
 
     this.route.paramMap.subscribe((paramMap) => {
       this.bartender = paramMap.get('name');

       this.route.paramMap.subscribe((paramMap) => {
        this.bar = paramMap.get('bar');
 
       this.bartenderService.getShifts(this.bartender, this.bar).subscribe(
         data => {
           this.shifts = data;
           this.shifts = this.convertDate(this.shifts)
         }
       );
     });
 });
}

convertDate(temp : Shifts[]) {
    var i = 0;
    for(i = 0; i < temp.length; i++) {
      this.shifts[i].Date = temp[i].Date.replace(/\//g, "-");
      console.log(temp[i].Date);
    }
    return temp;
}


  ngOnInit() {
  }


}
