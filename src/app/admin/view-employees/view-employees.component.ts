import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
viewEmployees:any
Emp:any
superiors:any
eId:any
  constructor(private adminservice:AdminService,private fb :FormBuilder,){}
  data:any;
  
  ngOnInit(): void {
    this.adminservice.getEmlpoyees().subscribe((res:any)=>{
    this.viewEmployees=res      
    })
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
  }

  

  editemp(e:any){
    let selection=e.role;
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
   this.adminservice.viewEmpsBasedonSuperior(s).subscribe((res:any)=>{
     this.superiors=res
     console.log(this.superiors);
     
       })
    this.Emp.patchValue({
      empid:e.empid,
      role:e.role,
      superior:e.superior,
      firstname:e.firstname,
      lastname:e.lastname,
      username:e.username,
      mobileno:e.mobileno,
      emailid:e.emailid,
      qualification:e.qualification,
      address:e.address
     
      })
  }
  update(){
  let data={
    
  }
   this.adminservice.updateEmployee(this.eId,this.Emp.value).subscribe((res:any)=>{
console.log(res);

    alert('update succesfully')
   })
  }
  deleteEmp(id:any){
    this.adminservice.deleteEmployee(id).subscribe((res:any)=>{
   console.log(res,'del');
   
    })
  }
  }



