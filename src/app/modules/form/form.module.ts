import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './page/form/form.component';
import { MatAngularModule } from 'src/app/shared/mat-angular/mat-angular.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    MatAngularModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
