import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit {

  @Input() rate: number = 0;

  constructor() { }
  ngOnInit(): void {
  }

}
