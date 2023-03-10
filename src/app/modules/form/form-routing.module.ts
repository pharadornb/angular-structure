import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from 'src/app/core/guard/user-guard.guard';
import { FormComponent } from './page/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    canActivate: [UserGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
