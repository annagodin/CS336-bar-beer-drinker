import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import {ModificationService, Bar } from '../modification.service';

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
  loadTable: boolean;
  bars: Bar[];
  tableTest: object;


  constructor(public modificationService: ModificationService) {
    this.loadForm= false;
    this.loadTable=false;
    this.formData= {};
    this.tableTest= {};
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

  tableData(bar: any){
    //THIS ONLY WORKS FOR BAR RN BC THATS THE ONLY DATA I DID
    console.log("this is what table data returns: ", bar);
    var arr:string[]; 
    arr = [bar.Bar, bar.City, bar.License, bar.Phone];
    this.colInfoUpdate = arr;
    if(this.modificationType == "Update"){
      this.loadForm=true;
    }else{ //else it is a delete
      //create some pop up to ask if they are sure they want to delete 
    }
   
  }

  ngOnInit() {
  }

  generateModification(){
    this.loadForm=false;
    this.loadTable=false;
    console.log("Button Worked");
    console.log("the current db is: [", this.currentDatabase, "]");
    console.log("Mod Type: [", this.modificationType, "]");

    if(this.modificationType == "Update"){
      this.Update();
      this.loadTable=true;
    }else if (this.modificationType == "Insert"){
      this.Insert();
      this.loadForm=true;
    }else if(this.modificationType == "Delete"){
        this.Delete();
        this.loadTable=true;
    }else{
      //FIXME some how throw an error
    }
    
  }

  Delete(){
    if(this.currentDatabase== 'Bars'){
      console.log("load bars for delete");
      this.modificationService.getBars().subscribe(
        data =>  {
            this.bars = data;
        })};
  }

  Update(){
    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },200)

    if(this.currentDatabase== 'Bars'){
      console.log("load bars for update");
      this.modificationService.getBars().subscribe(
        data =>  {
            this.bars = data;
        })};
  }

  Insert(){
    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
    
    if(this.currentDatabase == "Bars" && this.modificationType == "Insert"){
      this.generateBarsUpdate();
    }

    else if(this.currentDatabase == "Bartenders" && this.modificationType == "Insert"){
      this.generateBartendersUpdate();
    }

    else if(this.currentDatabase == "Customers" && this.modificationType == "Insert"){
      this.generateCustomersUpdate();
    }

    else if(this.currentDatabase == "Item" && this.modificationType == "Insert"){
      this.generateItemUpdate();
    }

    else if(this.currentDatabase == "Frequents" && this.modificationType == "Insert"){
      this.generateFrequentsUpdate();
    }

    else if(this.currentDatabase == "Frequents" && this.modificationType == "Insert"){
      this.generateFrequentsUpdate();
    }

    else if(this.currentDatabase == "ItemsById" && this.modificationType == "Insert"){
      this.generateItemsByIdUpdate();
    }

    else if(this.currentDatabase == "Likes" && this.modificationType == "Insert"){
      this.generateLikesUpdate();
    }

    else if(this.currentDatabase == "MasterSells" && this.modificationType == "Insert"){
      this.generateMasterSellsUpdate();
    }

    else if(this.currentDatabase == "OpenHours" && this.modificationType == "Insert"){
      this.generateOpenHoursUpdate();
    }
    
    else if(this.currentDatabase == "ShiftHours" && this.modificationType == "Insert"){
      this.generateShiftHoursUpdate();
    }

    else if(this.currentDatabase == "Stores" && this.modificationType == "Insert"){
      this.generateStoresUpdate();
    }
    else if(this.currentDatabase == "Transactions" && this.modificationType == "Insert"){
      this.generateTransactionsUpdate();
    }else{
      console.log("WRONG ");
    }
  }

 /**
  *  Insert FORMS
  */

   generateBarsUpdate(){
    this.colInfoUpdate= this.modificationService.getBarCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateBartendersUpdate(){
    this.colInfoUpdate= this.modificationService.getBartendersCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateCustomersUpdate(){
    this.colInfoUpdate= this.modificationService.getCustomersCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateItemUpdate(){
    this.colInfoUpdate= this.modificationService.getItemCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateFrequentsUpdate(){
    this.colInfoUpdate= this.modificationService.getFrequentsCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateItemsByIdUpdate(){
    this.colInfoUpdate= this.modificationService.getItemsByIdCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateLikesUpdate(){
    this.colInfoUpdate= this.modificationService.getLikesCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateMasterSellsUpdate(){
    this.colInfoUpdate= this.modificationService.getMasterSellsCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateOpenHoursUpdate(){
    this.colInfoUpdate= this.modificationService.getOpenHoursCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateShiftHoursUpdate(){
    this.colInfoUpdate= this.modificationService.getShiftHoursCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateStoresUpdate(){
    this.colInfoUpdate= this.modificationService.getStoresCols();

    setTimeout(function(){
      document.getElementById('scrollHere').scrollIntoView(true);
    },100)
  }

  generateTransactionsUpdate(){
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
   //SET EVERYTHING TO FALSE
   this.loadForm=false;
   this.loadTable=false;
  }

  enterData(){
    for(let a of Object.keys(this.formData)){
        console.log("new entry is: ", this.formData[a]);
        console.log("key is: ", a);
    }
  }
}
