import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-route-detail',
  templateUrl: './angular-route-detail.component.html',
  styleUrls: ['./angular-route-detail.component.scss']
})
export class AngularRouteDetailComponent {

  id : number = 0;

  //parent to *child component data flow
  @Input() child = '';

  //*child to parent conmponent data fkiw
  childToParent: string = 'ThailandOnlyfans';

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem() {
    this.newItemEvent.emit(this.childToParent);
  }
  
  constructor(private route: ActivatedRoute) {
    this.getHero();
  }

  getHero(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
