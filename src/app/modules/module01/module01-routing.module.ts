import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './page/component01/component01.component';

const routes: Routes = [
  { path: 'eiei', component: Component01Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module01RoutingModule { }
