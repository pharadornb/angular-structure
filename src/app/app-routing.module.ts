import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin/admin.guard';
import { UserGuardGuard } from './core/guard/user-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'module01',
    loadChildren: () => import('./modules/module01/module01.module').then(m => m.Module01Module)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/mat-table/mat-table.module').then(m => m.MatTableModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./modules/condition/condition.module').then(m => m.ConditionModule)
  },
  {
    path: 'power-angular',
    loadChildren: () => import('./modules/power-angular/power-angular.module').then(m => m.PowerAngularModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
