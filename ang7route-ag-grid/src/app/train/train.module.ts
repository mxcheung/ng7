// train.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainRoutingModule } from './train-routing.module';

import { TrainComponent } from './train/train.component';
import { TrainListComponent } from './train-list/train-list.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';

@NgModule({
  declarations: [TrainComponent, TrainListComponent, TrainDetailComponent],
  imports: [
    CommonModule,
    TrainRoutingModule
  ]
})
export class TrainModule { }