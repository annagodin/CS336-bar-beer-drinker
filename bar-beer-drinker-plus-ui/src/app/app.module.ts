import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { DrinkerComponent} from './drinker/drinker.component';
import { DrinkerTransactionsComponent } from './drinker-transactions/drinker-transactions.component';
import { BeersComponent } from './beers/beers.component';
import { FormsModule } from '@angular/forms';
import { InsightComponent } from './insight/insight.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerDetailsComponent,
    DrinkerComponent,
    DrinkerTransactionsComponent,
    BeersComponent,
    InsightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    TableModule,
    AppRoutingModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
