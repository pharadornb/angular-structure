import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerAngularRoutingModule } from './power-angular-routing.module';
import { PowerAngularComponent } from './page/power-angular/power-angular.component';
import { AngularRouteComponent } from './page/angular-route/angular-route.component';
import { AngularRouteDetailComponent } from './page/angular-route-detail/angular-route-detail.component';


@NgModule({
  declarations: [
    PowerAngularComponent,
    AngularRouteComponent,
    AngularRouteDetailComponent
  ],
  imports: [
    CommonModule,
    PowerAngularRoutingModule
  ]
})
export class PowerAngularModule { }
