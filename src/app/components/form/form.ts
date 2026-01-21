import { Component } from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    BtnPrimary,
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrls: ['./form.scss'],
})
export class Form {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
