import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevService {


  constructor(private http: HttpClient) { }
  DlProfile(id:any){
    return this.http.get('http://localhost:1234/developer/profile?_id='+id)
  }
  DlviewTask(username:any){
    return this.http.get('http://localhost:1234/developer/viewtask?developer='+username)
  }
}
