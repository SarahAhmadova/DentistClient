import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // #region Appointment

    public appoint(data:any):Observable<any>{
      return this.http.post<any>(`${environment.baseUrl}/Client/appointment`,data);
    }

 // #endregion Registration


  public getStaff():Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/Client/staff`);
  }
  public getServices():Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/Client/services`);
  }


}
