import { Component, OnInit } from '@angular/core';
import { quotes } from './quotes';

@Component({
  selector: 'app-pics-container',
  templateUrl: './pics-container.component.html',
  styleUrls: ['./pics-container.component.scss'],
})
export class PicsContainerComponent implements OnInit {
  constructor() {}
  images = Array.from(Array(8).keys()).map((n) => `/assets/img${n+1}.png`);
  quotes = quotes;
  ngOnInit(): void {}
}
