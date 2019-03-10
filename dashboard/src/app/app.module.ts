// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from './student/student.module';



import { ChartModule  } from 'angular-highcharts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardpanelComponent } from './shared/components/dashboardpanel/dashboardpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    StudentModule
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }