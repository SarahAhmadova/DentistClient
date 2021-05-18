import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services: any[] = [];
  submitted:boolean = false;
  public appForm: FormGroup;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private notifier: NotifierService) {

      apiService.getServices().subscribe(
      res => {
        this.services = res.map(r => r.name);
      }
    )

    this.appForm = fb.group({
      fullname: ["",[Validators.required]],
      phone: ["",[Validators.required,Validators.minLength(14)]],
      service: ["Xidmət növü",[Validators.required]],
      time: ["Vaxt"],
      date: ["Tarix"]

    })
  }

  ngOnInit(): void {

  }

  get f(){
    return this.appForm.controls;
  }

  unSelected:boolean = false;
  appoint:any;
  submit() {
    this.submitted = true;
    this.unSelected= $(".selectmenu option:selected").val()=="Xidmət növü"? true: false;

    if (this.appForm.invalid || this.unSelected) {
      return;
    }
    this.appoint={
      patient: this.appForm.value.fullname,
      phone: this.appForm.value.phone,
      service: $(".selectmenu option:selected").val(),
      time: $("input[name='time']").val()=="Vaxt"?null:$("input[name='time']").val(),
      date: $("input[name='date']").val()=="Tarix"?null:$("input[name='date']").val()
    }

    this.apiService.appoint(this.appoint).subscribe(
      res=>{
        this.notifier.notify("success","İstəyiniz qeydə alındı.");
      },
      err=>{
        this.notifier.notify("warning","Siz artıq etdiyyatdan keçmisiniz.");
        console.log(err);
      }
    )
    
  }

}
