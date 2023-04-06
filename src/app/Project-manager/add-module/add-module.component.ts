import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {
  Addmodule!:FormGroup
  viewprojects:any
  teameleaders:any
constructor(private api :ProjectManagerService,private fb:FormBuilder){
  let name =JSON.parse(localStorage.getItem('token')!);
  
  this.api.getprojects(name.username).subscribe((res:any)=>{
    this.viewprojects=res
  })
  this.api.viewEmpsBasedonSuperior(name.username).subscribe((res:any)=>{
this.teameleaders=res

  })
}
  ngOnInit(): void {
  this.Addmodule = this.fb.group({
    project:['',[Validators.required]],
    file:['',[Validators.required]],
    teamleader:['',[Validators.required]],
    module:['',[Validators.required]],
    status:['New Module'],
    date:[new Date()],
  })


  // this.api.getprojects().subscribe((res:any)=>{

  // })
  
  }
  submit(){
    this.api.AddModule(this.Addmodule.value).subscribe((res:any)=>{
      console.log(res,'addmodule');
      
    })
  }


}
