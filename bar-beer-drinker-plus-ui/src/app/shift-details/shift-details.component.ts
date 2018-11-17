import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {

//   shifts: Shifts[];
//   bartender : string
//   bar : string
//   date : string

//   constructor(
//    private bartenderService: BartenderService,
//    private route: ActivatedRoute) {
 
//      this.route.paramMap.subscribe((paramMap) => {
//        this.bartender = paramMap.get('name');

//        this.route.paramMap.subscribe((paramMap) => {
//         this.bar = paramMap.get('bar');

//         this.route.paramMap.subscribe((paramMap) => {
//           this.date = paramMap.get('date');
 
//        this.bartenderService.getShifts(this.bartender, this.bar).subscribe(
//          data => {
//            this.shifts = data;
//          }
//        );
//      });
//  });
// }

  ngOnInit() {
  }

}



