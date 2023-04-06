import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit{
  viewProjects :any
  constructor(private api:AdminService){}


  ngOnInit(): void {
    this.api.getProjects().subscribe((res:any)=>{
      this.viewProjects=res
      
    })
  }
  

}
