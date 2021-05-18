import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'dentistApp';
    private wowSubscription: Subscription;
  
    constructor(private wowService: NgwWowService){
     
        
        this.wowService.init(); 
    
    }
   
    ngOnInit() {
      this.wowSubscription = this.wowService.itemRevealed$.subscribe(
        (item:HTMLElement) => {
          // do whatever you want with revealed element
        });
    }
   
    ngOnDestroy() {
      this.wowSubscription.unsubscribe();
    }
  }

