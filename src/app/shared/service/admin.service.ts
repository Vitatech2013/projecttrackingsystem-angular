import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 constructor(private http:HttpClient) { }
  adminlogin(uname:any,pwd:any){
    return this.http.get('http://localhost:1234/admin/login?username='+uname+'&password='+pwd)
  }

  Pmlogin(uname:any,pwd:any,role:any){
    return this.http.get('http://localhost:1234/projectmanager/login?username='+uname+'&password='+pwd+'&role='+role)
  }

  TLlogin(uname:any,pwd:any,role:any){
    return this.http.get('http://localhost:1234/teamleader/login?username='+uname+'&password='+pwd+'&role='+role)
  }

  
  Dlogin(uname:any,pwd:any,role:any){
    return this.http.get('http://localhost:1234/developer/login?username='+uname+'&password='+pwd+'&role='+role)
  }

  PostEmp(data:any){
    return this.http.post<any>('http://localhost:1234/admin/registration',data)
  }
  getEmlpoyees(){
    return this.http.get('http://localhost:1234/admin/view')
  }
  AddProject(data:any){
    return this.http.post<any>('http://localhost:1234/admin/addproject',data)
  }
  getProjects(){
    return this.http.get('http://localhost:1234/admin/viewprojects')
  }
  changePwd(id:any,data:any){
    return this.http.put('http://localhost:1234/admin/updatepassword/'+id,data)
  }
  viewEmpsBasedonSuperior(s:any){
    return this.http.get('http://localhost:1234/admin/superiors?role='+s)
  }
  viewEmpsBasedonName(s:any){
    return this.http.get('http://localhost:1234/admin/superiors?role='+s)
  }
  updateEmployee(id:any,data:any){
    return this.http.put('http://localhost:1234/admin/update/'+id,data)
  }
  deleteEmployee(id:any){
    return this.http.delete('http://localhost:1234/admin/delete/'+id)
  }
}


