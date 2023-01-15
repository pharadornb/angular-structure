import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableRoutingModule } from './mat-table-routing.module';
import { MatTableComponentComponent } from './page/mat-table-component/mat-table-component.component';
import { MatAngularModule } from 'src/app/shared/mat-angular/mat-angular.module';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';


@NgModule({
  declarations: [
    MatTableComponentComponent,
    MatDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableRoutingModule,
    MatAngularModule
  ]
})
export class MatTableModule { }
