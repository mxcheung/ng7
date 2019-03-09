// plane-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaneComponent } from './plane/plane.component';
import { PlaneListComponent } from './plane-list/plane-list.component';
import { PlaneDetailComponent } from './plane-detail/plane-detail.component';

const routes: Routes = [
    {
        path: 'plane',
        component: PlaneComponent,
        children: [
            {
                path: 'list',
                component: PlaneListComponent
            },
            {
                path: 'detail',
                component: PlaneDetailComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaneRoutingModule { }