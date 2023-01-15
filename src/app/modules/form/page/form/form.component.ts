import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  value : string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      firstName:  new FormControl('', Validators.required),
      lastName: 'Ererererereerr',
      email: new FormControl('', Validators.email),
      phone: ''
    });
  }

  ngOnInit() {}

  setVal() {
    let x = {
      firstName: '',
      lastName: 'TukTuk',
      email: '',
      phone: ''
    }

    this.myForm.setValue(x);
  }
}
