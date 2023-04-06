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
constructor(private fb :FormBuilder,private adtask:TLServiceService,private dev:TLServiceService){
 
  let name = JSON.parse(localStorage.getItem('token')!)

  this.dev.getDeveloper(name.username).subscribe((res:any)=>{
    this.devlopers=res
    
      })
}

  ngOnInit(): void {
  
    this. Addtask = this.fb.group({
      project:['',[Validators.required]],
      module:['',[Validators.required]],
      developer:['',[Validators.required]],
      task:['',[Validators.required]],
      file:['',[Validators.required]],
     
     })
  
      
    }
    submit(){
      
      this.adtask.Addtask(this.Addtask.value).subscribe((res:any)=>{
        console.log(res,'addpr');
        
      })
    }
  
}

