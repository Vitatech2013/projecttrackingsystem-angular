import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TLServiceService } from '../tl-service.service';

@Component({
  selector: 'app-tl-addtask',
  templateUrl: './tl-addtask.component.html',
  styleUrls: ['./tl-addtask.component.css']
})
export class TLAddtaskComponent implements OnInit{
  Addtask ! :FormGroup
  devlopers:any
  viewprojects:any
  name:any
  viewmodules:any
constructor(private fb :FormBuilder,private tlService:TLServiceService,){
 
  let name = JSON.parse(localStorage.getItem('teamleader')!)

   this.tlService.getDeveloper(name.username).subscribe((res:any)=>{
     this.devlopers=res
 })  
console.log(name.username);

this.tlService.getProjects(name.username).subscribe((res:any)=>{
  this.viewprojects=res
console.log(this.viewprojects);

})


}

  ngOnInit(): void {
  
    this. Addtask = this.fb.group({
      project:['',[Validators.required]],
      module:['',[Validators.required]],
      developer:['',[Validators.required]],
      task:['',[Validators.required]],
      file:['',[Validators.required]],
      status:['New Module'],
      date:[new Date()],
     })
  
      
    }

    isGetModule(event:any){
      let pname = JSON.parse(localStorage.getItem('teamleader')!).username
      this.tlService.getModules(pname,event.target.value).subscribe((res:any)=>{
        this.viewmodules=res
      })
    }

    submit(){
      alert('Add Task Sucessfully')
      this.tlService.Addtask(this.Addtask.value).subscribe((res:any)=>{
       
        
      })
    }
  

  }
