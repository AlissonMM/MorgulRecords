import { Component } from '@angular/core';
import {Header} from '../header/header';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {BtnPrimary} from '../btn-primary/btn-primary';
import {Form} from '../form/form';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    NgOptimizedImage,
    BtnPrimary,
    Form,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  protected readonly BtnPrimary = BtnPrimary;
}
