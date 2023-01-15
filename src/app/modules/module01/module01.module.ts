import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module01RoutingModule } from './module01-routing.module';
import { Component01Component } from './page/component01/component01.component';


@NgModule({
  declarations: [
    Component01Component
  ],
  imports: [
    CommonModule,
    Module01RoutingModule
  ]
})
export class Module01Module { }
