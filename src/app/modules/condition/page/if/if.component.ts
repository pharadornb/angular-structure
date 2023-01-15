import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent {

  thailandOnly: string = 'Playuth';
  thailandAndJapan: any;
  thailandAndJapan2: number = 10;
  thailandAndJapan3: boolean = false;
  thailandAndJapan4: string[] = ['Yes', 'No', 'Ok', 'Thx', 'Bye', 'Hello'];

  constructor() { }

  Calculate() {
    alert('Calculate')
    if(this.thailandAndJapan3 === true) 
      this.thailandAndJapan3 = false;
    else
    this.thailandAndJapan3 = true;
  }
}
