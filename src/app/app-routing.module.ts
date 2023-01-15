import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module01',
    loadChildren: () => import('./modules/module01/module01.module').then(m => m.Module01Module)
  },
  {
    path: 'mat-table',
    loadChildren: () => import('./modules/mat-table/mat-table.module').then(m => m.MatTableModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./modules/condition/condition.module').then(m => m.ConditionModule)
  },
  {
    path: 'power-angular',
    loadChildren: () => import('./modules/power-angular/power-angular.module').then(m => m.PowerAngularModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
