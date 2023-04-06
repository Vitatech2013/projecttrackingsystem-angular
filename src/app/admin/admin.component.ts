import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private fb : FormBuilder,
    private adminService:AdminService,private router:Router){}

adminlogin =this.fb.group({
  userName:['',[Validators.required,Validators.minLength(4)]],
  pwd:['',[Validators.required,Validators.minLength(4)]]

 });
 ngOnInit():void{}
 get userName(){
   return this.adminlogin.get('userName')
 }
 get pwd(){
   return this.adminlogin.get('pwd')
 }
 submit(){
  this.adminService.adminlogin(this.adminlogin.value.userName, this.adminlogin.value.pwd).subscribe((res:any)=>{
    if(res){
      alert('login success')
      localStorage.setItem('admin', JSON.stringify(res))
  this.router.navigate(['/adminpage'])
    }else{
      alert('login failed')
    }
  })
  
 }
}