import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
<<<<<<< HEAD
import { DrinkerComponent } from './drinker/drinker.component';
=======
import { BeerDetailsComponent } from './beer-details/beer-details.component';
>>>>>>> 9cf49f9447cf7171d9c2bc87e7b57d0e6608cd82

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
<<<<<<< HEAD
    DrinkerComponent
=======
    BeerDetailsComponent
>>>>>>> 9cf49f9447cf7171d9c2bc87e7b57d0e6608cd82
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    AppRoutingModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
