// automobile.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomobileRoutingModule } from './automobile-routing.module';

import { AutomobileComponent } from './automobile/automobile.component';
import { AutomobileListComponent } from './automobile-list/automobile-list.component';
import { AutomobileDetailComponent } from './automobile-detail/automobile-detail.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AutomobileComponent, AutomobileListComponent, AutomobileDetailComponent],
  imports: [
    CommonModule, HttpClientModule, 
    AgGridModule.withComponents([]),
    AutomobileRoutingModule
  ]
})
export class AutomobileModule { }