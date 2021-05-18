import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'service-carousel',
  templateUrl: './service-carousel.component.html',
  styleUrls: ['./service-carousel.component.scss']
})
export class ServiceCarouselComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    dots: true,
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1024: {
        items: 3
      },
      1100: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  }
  ngOnInit() {
  }

}
