import {Component, signal} from '@angular/core';
import { BtnPrimary } from '../btn-primary/btn-primary';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormService} from '../../services/form-service';
import {inject} from 'vitest';

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

  loading = signal(false)


  constructor(private formService: FormService) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.formGroup.valid) {
      this.formService.sendData(this.formGroup.value.name, this.formGroup.value.email).subscribe({
        next: () => {
          this.formGroup.reset();
          this.loading.set(false);
        }
      });
    }
  }

}
