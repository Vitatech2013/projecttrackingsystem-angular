import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
 profile !:FormGroup
 pm :any
 constructor(private api:ProjectManagerService,private fb :FormBuilder){
  
 }

  ngOnInit(): void {
    let pId = JSON.parse(localStorage.getItem('token')!)._id   
  
    
    this.profile =this.fb.group({
      empid :['',[Validators.required,]],
        role:['',[Validators.required,]],
        superior:['',[Validators.required]],
         firstname:['',[Validators.required]],
         lastname:['',[Validators.required]],
         username:['',[Validators.required]],
         mobileno:['',[Validators.required]],
         emailid:['',[Validators.required]],
         qualification:['',[Validators.required]],
         address:['',[Validators.required]],
       
       });
       this.api.pmProfile(pId).subscribe((res:any)=>{
        this.pm =res
        this.profile.patchValue({
          empid:this.pm.empid,
          role:this.pm.role,
          superior:this.pm.superior,
          firstname:this.pm.firstname,
          lastname:this.pm.lastname,
          username:this.pm.username,
          mobileno:this.pm.mobileno,
          emailid:this.pm.emailid,
          qualification:this.pm.qualification,
          address:this.pm.address
        })
        })
    

  }
 
}
