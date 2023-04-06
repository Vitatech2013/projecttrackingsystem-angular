import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/service/admin.service';

@Component({
  selector: 'app-devloper',
  templateUrl: './devloper.component.html',
  styleUrls: ['./devloper.component.css']
})
export class DevloperComponent {
  constructor(private fb : FormBuilder,
    private adminService:AdminService,private router:Router){}

Dlogin =this.fb.group({
  userName:['',[Validators.required,Validators.minLength(4)]],
  pwd:['',[Validators.required,Validators.minLength(4)]]

 });
 ngOnInit():void{}
 get userName(){
   return this.Dlogin.get('userName')
 }
 get pwd(){
   return this.Dlogin.get('pwd')
 }
 submit(){
  this.adminService.Dlogin(this.Dlogin.value.userName, this.Dlogin.value.pwd).subscribe((res:any)=>{
    if(res){
      alert('login success')
  this.router.navigate(['/home'])
    }else{
      alert('login failed')
    }
  })
  
 }
}
