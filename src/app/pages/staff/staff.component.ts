import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  public staffList: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getStaff().subscribe(
      staff => {
        this.staffList = staff;
        console.log(staff);

      },
      err => {
        switch (err.status) {
          case 400:
            let errors = err.error.errors;
            console.log("error");
            for (let key of Object.keys(errors)) {
              errors[key].forEach(e => {
              });
            }
            break;
          case 404:
            break;
          default:
            console.log('unknown error');
            break;
        }
      },
      () => {
      }
    );
   }

  ngOnInit(): void {
  }

}
