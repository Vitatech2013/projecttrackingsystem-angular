import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectManagerService } from 'src/app/Project-manager/project-manager.service';
import { TLServiceService } from '../tl-service.service';

@Component({
  selector: 'app-tl-profile',
  templateUrl: './tl-profile.component.html',
  styleUrls: ['./tl-profile.component.css']
})
export class TLProfileComponent {
 
 TLprofile !:FormGroup
  TL :any
  constructor(private TLservice:TLServiceService ,  private fb :FormBuilder){
   
  }
 
   ngOnInit(): void {
     let pId = JSON.parse(localStorage.getItem('token')!)._id   
   
     
     this.TLprofile =this.fb.group({
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
        this.TLservice.TLProfile(pId).subscribe((res:any)=>{
         this.TL =res
         console.log(res);
         
         this.TLprofile.patchValue({
           empid:this.TL.empid,
           role:this.TL.role,
           superior:this.TL.superior,
           firstname:this.TL.firstname,
           lastname:this.TL.lastname,
           username:this.TL.username,
           mobileno:this.TL.mobileno,
           emailid:this.TL.emailid,
           qualification:this.TL.qualification,
           address:this.TL.address
         })
         })
     
 
   }
}
