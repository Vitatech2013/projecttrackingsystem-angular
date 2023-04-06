import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  AddProject ! :FormGroup
  projectmanagers:any
  username:any
  constructor(private fb : FormBuilder,private api:AdminService){

  let name = JSON.parse(localStorage.getItem('token')!);
  
    this.api.viewEmpsBasedonName('Project Manager').subscribe((res:any)=>{
      this.projectmanagers=res
      console.log( this.projectmanagers);
      
        })
  }
  ngOnInit(){
   this. AddProject = this.fb.group({
    project:['',[Validators.required]],
    technology:['',[Validators.required]],
    manager:['',[Validators.required]],
    duration:['',[Validators.required]],
    file:['',[Validators.required]],
    status:['New Module'],
    date:[new Date()],
   })

    
  }
  submit(){
    
    this.api.AddProject(this.AddProject.value).subscribe((res:any)=>{
      console.log(res,'addpr');
      
    })
  }
}
