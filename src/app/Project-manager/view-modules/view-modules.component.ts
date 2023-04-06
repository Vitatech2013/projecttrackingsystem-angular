import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';

@Component({
  selector: 'app-view-modules',
  templateUrl: './view-modules.component.html',
  styleUrls: ['./view-modules.component.css']
})
export class ViewModulesComponent implements OnInit{
  viewmodule!:any
  
 constructor(private api:ProjectManagerService){}
  ngOnInit(): void {
    this.api.viewmodule().subscribe((res:any)=>{
      this.viewmodule = res
    })
  }
}
