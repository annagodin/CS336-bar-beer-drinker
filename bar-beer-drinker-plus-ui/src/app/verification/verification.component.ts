import { Component, OnInit } from '@angular/core';
import { VerificationService } from '../verification.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

   hand1 = false
   hand2 = false
   hand3 = false
   hand4 = false
   hand5 = false

  constructor(verifyService : VerificationService) { 
    var test1 = verifyService.verify_inventory();
    console.log(test1)
  }

  handle1($event) {
   this.hand1 = true;
  }

  handle2($event) {
    this.hand2 = true;
    }

    handle3($event) {
      this.hand3 = true;
      }

      handle4($event) {
        this.hand4 = true;
        }

        handle5($event) {
          this.hand5 = true;
          }

  ngOnInit() {
  }

}
