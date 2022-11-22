import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
})
export class CarouselSlideComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() props: any = {};
  ngOnInit(): void {}

  goToProductPage() {
    this.router.navigate(['/products']);
  }
}
