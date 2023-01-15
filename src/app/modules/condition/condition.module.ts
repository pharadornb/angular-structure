import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionRoutingModule } from './condition-routing.module';
import { IfComponent } from './page/if/if.component';


@NgModule({
  declarations: [
    IfComponent
  ],
  imports: [
    CommonModule,
    ConditionRoutingModule
  ]
})
export class ConditionModule { }
