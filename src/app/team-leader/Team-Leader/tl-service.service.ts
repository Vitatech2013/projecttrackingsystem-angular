import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TLServiceService {

  constructor(private http:HttpClient) {}
  TLProfile(id:any){
    return this.http.get('http://localhost:1234/teamleader/profile?_id='+id)
  }
  getEmployees(){
    return this.http.get('http://localhost:1234/teamleader/view')
  }
  Addtask(a:any){
    return this.http.post('http://localhost:1234/teamleader/addtask',a)
  }
  getDeveloper(d:any){
    return this.http.get('http://localhost:1234/TeamLeader/getemps?superior='+d)
  }
}
