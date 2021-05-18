import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'team-carousel',
  templateUrl: './team-carousel.component.html',
  styleUrls: ['./team-carousel.component.scss']
})
export class TeamCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    dots: true,
            loop:true,
            margin:30,
            nav:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
  }

}
