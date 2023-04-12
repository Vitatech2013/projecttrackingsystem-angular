import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pm-view-project',
  templateUrl: './pm-view-project.component.html',
  styleUrls: ['./pm-view-project.component.css']
})
export class PmViewProjectComponent implements OnInit {
  updateProject !:FormGroup
  viewprojects:any
  username:any
  vId:any
 constructor(private api:ProjectManagerService,private fb:FormBuilder){}
  ngOnInit(): void {
  this.getproject();
  this. updateProject = this.fb.group({
    project:['',[Validators.required]],
    status:['',[Validators.required]],
  
   })
 }
  getproject(){

  let name =JSON.parse(localStorage.getItem('token')!);
  
  this.api.getprojects(name.username).subscribe((res:any)=>{
    this.viewprojects=res
    
  })
}
edit(v:any){
  console.log(v);
  
this.vId=v._id

 this.updateProject.patchValue({
  project:v.project,
  status:v.status, 
 })

}

update(){
   console.log(this.vId,'vid', this.updateProject.value);
   
this.api.updateProjectstatus(this.vId,this.updateProject.value).subscribe((res:any)=>{
 window.location.reload()
 alert('Update Sucessfully')
})

}

}