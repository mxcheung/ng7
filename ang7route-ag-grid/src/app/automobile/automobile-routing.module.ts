// automobile-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomobileComponent } from './automobile/automobile.component';
import { AutomobileListComponent } from './automobile-list/automobile-list.component';
import { AutomobileDetailComponent } from './automobile-detail/automobile-detail.component';

const routes: Routes = [
    {
        path: 'automobile',
        component: AutomobileComponent,
        children: [
            {
                path: 'list',
                component: AutomobileListComponent
            },
            {
                path: 'detail',
                component: AutomobileDetailComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomobileRoutingModule { }