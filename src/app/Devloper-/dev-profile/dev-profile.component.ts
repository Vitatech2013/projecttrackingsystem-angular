import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevService } from '../dev.service';

@Component({
  selector: 'app-dev-profile',
  templateUrl: './dev-profile.component.html',
  styleUrls: ['./dev-profile.component.css']
})
export class DevProfileComponent {

  
 Dlprofile !:FormGroup
 Dl :any
 constructor(private dlservice:DevService,  private fb :FormBuilder){
  
 }

  ngOnInit(): void {
    let pId = JSON.parse(localStorage.getItem('developer')!)._id   
  
    
    this.Dlprofile =this.fb.group({
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
       this.dlservice.DlProfile(pId).subscribe((res:any)=>{
        this.Dl =res
        console.log(res);
        
        this.Dlprofile.patchValue({
          empid:this.Dl.empid,
          role:this.Dl.role,
          superior:this.Dl.superior,
          firstname:this.Dl.firstname,
          lastname:this.Dl.lastname,
          username:this.Dl.username,
          mobileno:this.Dl.mobileno,
          emailid:this.Dl.emailid,
          qualification:this.Dl.qualification,
          address:this.Dl.address
        })
        })
    

  }
}
