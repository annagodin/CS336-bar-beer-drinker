import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ModificationService } from '../modification.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {

  databaseOptions: SelectItem[];
  modificationOptions: SelectItem[];
  currentDatabase: string;
  modificationType: string;

  constructor(public modificationService: ModificationService) {
    this.databaseOptions = [
      {
        'label': 'Bars',
        'value': 'Bars'
      },
      {
        'label': 'Customers',
        'value': 'Customers'
      },
      {
        'label': 'Frequents',
        'value': 'Frequents'
      },
      {
        'label': 'Item',
        'value': 'Item'
      },
      {
        'label': 'ItemsByID',
        'value': 'ItemsByID'
      },
      {
        'label': 'Likes',
        'value': 'Likes'
      },
      {
        'label': 'MasterSells',
        'value': 'MasterSells'
      },
      {
        'label': 'OpenHours',
        'value': 'OpenHours'
      },
      {
        'label': 'ShiftHours',
        'value': 'ShiftHours'
      },
      {
        'label': 'Stores',
        'value': 'Stores'
      },
      {
        'label': 'Transactions',
        'value': 'Transactions'
      }
    ];

    this.modificationOptions = [
      {
        'label': 'Update',
        'value': 'Update'
      },
      {
        'label': 'Delete',
        'value': 'Delete'
      },
      {
        'label': 'Insert',
        'value': 'Insert'
      }
    ];


  }

  ngOnInit() {
  }

  setDatabase(database: string) {
    this.currentDatabase= database;
    console.log("the current db is: ", this.currentDatabase);
  }

  setModification(modType: string){
    this.modificationType= modType;
    console.log("Mod Type: ", this.modificationType);
  }

}
