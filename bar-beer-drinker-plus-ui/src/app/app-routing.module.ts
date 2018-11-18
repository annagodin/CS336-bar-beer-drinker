import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { DrinkerComponent } from './drinker/drinker.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { DrinkerTransactionsComponent } from './drinker-transactions/drinker-transactions.component';
import { BeersComponent } from './beers/beers.component';
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

//bye

const routes: Routes = [
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'bars'
  },  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'modification',
    pathMatch: 'full',
    component: ModificationComponent
  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: BarDetailsComponent
  },
  {
    path: 'drinker/:name',
    pathMatch: 'full',
    component: DrinkerTransactionsComponent
  },
  {
    path: 'drinker',
    pathMatch: 'full',
    component: DrinkerComponent
  },
  {
    path: 'drinker/:name/:id',
    pathMatch: 'full',
    component: ItemsPurchasedComponent
  },
  {
    path: 'drinker/top-beers/:customer',
    pathMatch: 'full',
    component: DrinkerAnalyticsComponent
  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent
  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  },
  {
    path: 'bartender',
    pathMatch: 'full',
    component: BartenderComponent
  },
  {
    path: 'bartender/:name/:bar',
    pathMatch: 'full',
    component: BartenderShiftsComponent
  },
  {
    path: 'manufacturer',
    pathMatch: 'full',
    component: ManufacturerComponent
  },
  {
    path: 'manufacturer/:manf',
    pathMatch: 'full',
    component: ManufacturerDetailsComponent
  },
  {
    path: 'bartender/:bartender/:bar/:date',
    pathMatch: 'full',
    component: ShiftDetailsComponent
  },
  {
    path: 'manufacturer/:manf/likes',
    pathMatch: 'full',
    component: ManfLikesComponent
  },
  {
    path: 'bartender/analytics',
    pathMatch: 'full',
    component: BartenderAnalyticsComponent
  },
  {
    path: 'bartender/analytics/:bar/:day/:start/:end',
    pathMatch: 'full',
    component: BartenderRankingComponent
  },
  {
    path: 'bartender/:bartender/:bar/:date/:start/:end',
    pathMatch: 'full',
    component: BartenderSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
