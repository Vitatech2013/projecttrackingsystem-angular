import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectManagerService } from 'src/app/Project-manager/project-manager.service';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
Emp !: FormGroup
superiors:any
username:any
 constructor(private fb : FormBuilder,private api:AdminService,private sapi :ProjectManagerService){

  
  }
  ngOnInit(): void {
    this.Emp =this.fb.group({
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
  }
addEmp(){
  // if(this.Emp.valid){
    this.api.PostEmp(this.Emp.value).subscribe((res)=>{
      console.log(res);
      
    })
  // }
}

isSuperior(event:any){
let selection=event.target.value;
let s=''
if (selection == "Team Leader") {
  s = "Project Manager";
}
else if (selection == "Developer") {
  s = "Team Leader";
}
else {
  s = "Admin";
}
console.log(selection);
console.log(s);


 this.api.viewEmpsBasedonSuperior(s).subscribe((res:any)=>{
   this.superiors=res
   console.log(this.superiors);
  
     })
}
//  addEmp(){
//   this.api.PostEmp(this.Emp).subscribe((res:any)=>{
//     console.log(res,'addemp');
    
//   })
//  }
}
