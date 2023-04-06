import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  constructor(private http : HttpClient) { }
  pmProfile(id:any){
    return this.http.get('http://localhost:1234/projectmanager/profile?_id='+id)
  }
  getemployees(){
    return this.http.get('http://localhost:1234/projectmanager/view')
  }
  AddModule(data:any){
    return this.http.post<any>('http://localhost:1234/projectmanager/addmodule',data)
  }
  viewmodule(){
    return this.http.get('http://localhost:1234/projectmanager/viewmodule')
  }
  getprojects(username:any){
    return this.http.get('http://localhost:1234/projectmanager/viewprojects?manager='+username)
  }
  viewEmpsBasedonSuperior(s:any){
    return this.http.get('http://localhost:1234/projectmanager/getemps?superior='+s)
  }
}
