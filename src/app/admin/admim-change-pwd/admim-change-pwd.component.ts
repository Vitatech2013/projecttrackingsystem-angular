import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admim-change-pwd',
  templateUrl: './admim-change-pwd.component.html',
  styleUrls: ['./admim-change-pwd.component.css']
})
export class AdmimChangePwdComponent implements OnInit {
  admin:any
constructor( private fb :FormBuilder,
  private adminservice:AdminService,
  private router:Router
  ){}
 
Cpwd =this.fb.group({
 
  pwd:['',[Validators.required,Validators.minLength(4)]],
  npwd:['',[Validators.required,Validators.minLength(4)]]
 });
 ngOnInit(){
this.admin=JSON.parse(localStorage.getItem('admin')!)
 }

 get pwd(){
   return this.Cpwd.get('pwd')
 }
 get npwd(){
  return this.Cpwd.get('npwd')
}

  submit(){
    let data={
      password:this.Cpwd.value.npwd
    }
    if(this.Cpwd.value.pwd==this.admin.password){
      this.adminservice.changePwd(this.admin._id,data).subscribe((res:any)=>{
        localStorage.removeItem('admin')
        this.router.navigate(['/home/admin'])
      })
    }else{
      alert('old password is not matched')
    }
  }
}
