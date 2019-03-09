// train-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainComponent } from './train/train.component';
import { TrainListComponent } from './train-list/train-list.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';

const routes: Routes = [
    {
        path: 'train',
        component: TrainComponent,
        children: [
            {
                path: 'list',
                component: TrainListComponent
            },
            {
                path: 'detail',
                component: TrainDetailComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }