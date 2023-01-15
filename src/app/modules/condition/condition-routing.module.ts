import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfComponent } from './page/if/if.component';

const routes: Routes = [
  {
    path: '',
    component: IfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionRoutingModule { }
