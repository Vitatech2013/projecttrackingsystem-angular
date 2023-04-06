import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';

@Component({
  selector: 'app-pm-view-project',
  templateUrl: './pm-view-project.component.html',
  styleUrls: ['./pm-view-project.component.css']
})
export class PmViewProjectComponent implements OnInit {
  viewprojects:any
  username:any
  y:any
 constructor(private api:ProjectManagerService){}
  ngOnInit(): void {

this.getproject();
}
getproject(){

  let name =JSON.parse(localStorage.getItem('token')!);
  
  this.api.getprojects(name.username).subscribe((res:any)=>{
    this.viewprojects=res
    
  })
}
}