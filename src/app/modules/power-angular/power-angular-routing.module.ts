import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerAngularComponent } from './page/power-angular/power-angular.component';
import { AngularRouteComponent } from './page/angular-route/angular-route.component';
import { AngularRouteDetailComponent } from './page/angular-route-detail/angular-route-detail.component';

const routes: Routes = [
  {
    // power-angular
    path: '',
    component: PowerAngularComponent
  },
  {
    // power-angular/route
    path: 'route',
    component: AngularRouteComponent
  },
  {
    path: 'route/:id',
    component: AngularRouteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerAngularRoutingModule { }
