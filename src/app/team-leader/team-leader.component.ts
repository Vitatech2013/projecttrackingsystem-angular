import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/service/admin.service';

@Component({
  selector: 'app-team-leader',
  templateUrl: './team-leader.component.html',
  styleUrls: ['./team-leader.component.css']
})
export class TeamLeaderComponent {
 
  constructor(private fb : FormBuilder,
    private adminService:AdminService,private router:Router){}

TLlogin =this.fb.group({
  userName:['',[Validators.required,Validators.minLength(4)]],
  pwd:['',[Validators.required,Validators.minLength(4)]],
  role: ['Team Leader'],
 });
 ngOnInit():void{}
 get userName(){
   return this.TLlogin.get('userName')
 }
 get pwd(){
   return this.TLlogin.get('pwd')
 }

 submit(){
  this.adminService.TLlogin(this.TLlogin.value.userName, this.TLlogin.value.pwd,this.TLlogin.value.role).subscribe((res:any)=>{
    console.log(res);
    
    if(res){
      alert('login success')
      localStorage.setItem('teamleader', JSON.stringify(res))
      this.router.navigate(['/tldashboard'])
    }else{
      alert('login failed')
    }
  })
  
 }
}
