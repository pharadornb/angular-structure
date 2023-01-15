import { Component } from '@angular/core';

// const x : number = 10
@Component({
  selector: 'app-angular-route',
  templateUrl: './angular-route.component.html',
  styleUrls: ['./angular-route.component.scss']
})
export class AngularRouteComponent {

  users : number = 10;

  currentProduct: string = 'Radio';


  //child to *parent component data flow
  childToParent2: string = '';

  childToParent(data: string){

    // console.log(data);
    
    this.childToParent2 = data;
  }

  constructor() {
  }
}
