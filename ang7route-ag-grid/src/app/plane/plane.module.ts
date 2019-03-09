// plane.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaneRoutingModule } from './plane-routing.module';

import { PlaneComponent } from './plane/plane.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { PlaneDetailComponent } from './plane-detail/plane-detail.component';

@NgModule({
  declarations: [PlaneComponent, PlaneListComponent, PlaneDetailComponent],
  imports: [
    CommonModule,
    PlaneRoutingModule
  ]
})
export class PlaneModule { }