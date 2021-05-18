import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() imgs = ["src/assets/images/slides/v1-1.jpg","src/assets/images/slides/v1-2.jpg","src/assets/images/slides/v1-2.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

  

}
