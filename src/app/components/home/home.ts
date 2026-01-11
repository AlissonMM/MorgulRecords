import { Component } from '@angular/core';
import {Header} from '../header/header';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    NgOptimizedImage,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
