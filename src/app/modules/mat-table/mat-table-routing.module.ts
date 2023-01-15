import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableComponentComponent } from './page/mat-table-component/mat-table-component.component';

const routes: Routes = [
  {
    path: '',
    component: MatTableComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTableRoutingModule { }
