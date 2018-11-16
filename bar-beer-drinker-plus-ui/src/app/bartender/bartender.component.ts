import { Component, OnInit } from '@angular/core';
import { BartenderService, Bartenders } from '../bartender.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { prepareProfile } from 'selenium-webdriver/firefox';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-bartender',
  templateUrl: './bartender.component.html',
  styleUrls: ['./bartender.component.css']
})
export class BartenderComponent implements OnInit {

  bartenders: Bartenders[];

  constructor(private bartenderService: BartenderService) { //sort it using query
    this.bartenderService.getBartenders().subscribe(
      data => {
        this.bartenders = data;
      }
    );
  }
  

  ngOnInit() {
  }

}
