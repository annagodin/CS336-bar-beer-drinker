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
import { ItemsPurchasedComponent } from './items-purchased/items-purchased.component';
import { BartenderComponent } from './bartender/bartender.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ManufacturerDetailsComponent } from './manufacturer-details/manufacturer-details.component';
import { DrinkerAnalyticsComponent } from './drinker-analytics/drinker-analytics.component';
import { BartenderShiftsComponent } from './bartender-shifts/bartender-shifts.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { ManfLikesComponent } from './manf-likes/manf-likes.component';
import { ModificationComponent } from './modification/modification.component';
import { BartenderSalesComponent } from './bartender-sales/bartender-sales.component';
import { BartenderAnalyticsComponent } from './bartender-analytics/bartender-analytics.component';
import { BartenderRankingComponent } from './bartender-ranking/bartender-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerDetailsComponent,
    DrinkerComponent,
    DrinkerTransactionsComponent,
    BeersComponent,
    InsightComponent,
    ItemsPurchasedComponent,
    BartenderComponent,
    ManufacturerComponent,
    ManufacturerDetailsComponent,
    DrinkerAnalyticsComponent,
    BartenderShiftsComponent,
    ShiftDetailsComponent,
    ManfLikesComponent,
    ModificationComponent,
    BartenderSalesComponent,
    BartenderAnalyticsComponent,
    BartenderRankingComponent
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
