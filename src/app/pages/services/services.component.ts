import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceList:any[] = [];
  constructor(private apiService: ApiService) {
    this.apiService.getServices().subscribe(
      res=>{
        console.log(res);

        this.serviceList = res;

      },
      err=>{
        console.log(err);

      }
    )
  }
  customOptions: OwlOptions = {
    dots: true,
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    navSpeed: 700,
    navText: [
        '<span class="flaticon-back left"></span>',
        '<span class="flaticon-arrow right"></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      800: {
        items: 2
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
    console.log(this.serviceList);

  }


}
