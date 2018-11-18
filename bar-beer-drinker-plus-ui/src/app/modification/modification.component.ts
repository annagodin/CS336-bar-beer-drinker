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

  colInfoUpdate: string[];
  formData: object;
  loadForm: boolean;
  loadPopUp: boolean;




  constructor(public modificationService: ModificationService) {
    this.loadForm= false;
    this.formData= {};
    this.loadPopUp=true;
    console.log("form value: ", this.loadForm);
    this.databaseOptions = [
      {
        'label': 'Bars',
        'value': 'Bars'
      },
      {
        'label': 'Bartenders',
        'value': 'Bartenders'
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
        'label': 'ItemsById',
        'value': 'ItemsById'
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

  generateForm(){
    console.log("Button Worked");
    console.log("the current db is: ", this.currentDatabase);
    console.log("Mod Type: ", this.modificationType);

    
    if(this.currentDatabase == null || this.modificationType == null){
      console.log("the current whatever is null");
    }

    else if(this.currentDatabase == "Bars" && this.modificationType == "Update"){
      this.generateBarsUpdate();
    }

    else if(this.currentDatabase == "Bartenders" && this.modificationType == "Update"){
      this.generateBartendersUpdate();
    }

    else if(this.currentDatabase == "Customers" && this.modificationType == "Update"){
      this.generateCustomersUpdate();
    }

    else if(this.currentDatabase == "Item" && this.modificationType == "Update"){
      this.generateItemUpdate();
    }

    else if(this.currentDatabase == "Frequents" && this.modificationType == "Update"){
      this.generateFrequentsUpdate();
    }

    else if(this.currentDatabase == "Frequents" && this.modificationType == "Update"){
      this.generateFrequentsUpdate();
    }

    else if(this.currentDatabase == "ItemsById" && this.modificationType == "Update"){
      this.generateItemsByIdUpdate();
    }

    else if(this.currentDatabase == "Likes" && this.modificationType == "Update"){
      this.generateLikesUpdate();
    }

    else if(this.currentDatabase == "MasterSells" && this.modificationType == "Update"){
      this.generateMasterSellsUpdate();
    }

    else if(this.currentDatabase == "OpenHours" && this.modificationType == "Update"){
      this.generateOpenHoursUpdate();
    }
    
    else if(this.currentDatabase == "ShiftHours" && this.modificationType == "Update"){
      this.generateShiftHoursUpdate();
    }

    else if(this.currentDatabase == "Stores" && this.modificationType == "Update"){
      this.generateStoresUpdate();
    }
    else if(this.currentDatabase == "Transactions" && this.modificationType == "Update"){
      this.generateTransactionsUpdate();
    }else{
      console.log("WRONG ");
    }
  }

 /**
  *  UPDATE FORMS
  */

   generateBarsUpdate(){
    this.colInfoUpdate= this.modificationService.getBarCols();
    console.log(this.colInfoUpdate);
    this.loadForm= true;

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateBartendersUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getBartendersCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateCustomersUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getCustomersCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateItemUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getItemCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateFrequentsUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getFrequentsCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateItemsByIdUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getItemsByIdCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateLikesUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getLikesCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateMasterSellsUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getMasterSellsCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateOpenHoursUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getOpenHoursCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateShiftHoursUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getShiftHoursCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateStoresUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getStoresCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateTransactionsUpdate(){
    this.loadForm= true;
    this.colInfoUpdate= this.modificationService.getTransactionsCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

//INITIALIZE DATA
  setDatabase(database: string) {
    console.log("**DATABASE SELECTED IN SET MENU: ", database);
    this.currentDatabase= database;
  }

  setModification(modType: string){
    console.log("**MOD SELECTED IN SET MENU: ", modType);
    this.modificationType= modType;
  }

  clearData(){
    this.loadForm=false;
  }

  enterData(){
    for(let a of Object.keys(this.formData)){
        console.log("new entry is: ", this.formData[a]);
        console.log("key is: ", a);
    }
  }
}
