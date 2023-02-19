import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guard/admin/admin.guard';
import { MatTableComponentComponent } from './page/mat-table-component/mat-table-component.component';

const routes: Routes = [
  {
    path: '',
    component: MatTableComponentComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatTableRoutingModule { }
