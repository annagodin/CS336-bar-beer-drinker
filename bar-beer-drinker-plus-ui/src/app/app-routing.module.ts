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
import { DrinkerAnalyticsComponent } from './drinker-analytics/drinker-analytics.component';
import { ModificationComponent } from './modification/modification.component';

//hi

const routes: Routes = [
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'bars'
  },  
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bars'
  },
  
  {
    path: 'bars',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'modification',
    pathMatch: 'full',
    component: ModificationComponent
  },
  {
    path: 'bars/:bar',
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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
