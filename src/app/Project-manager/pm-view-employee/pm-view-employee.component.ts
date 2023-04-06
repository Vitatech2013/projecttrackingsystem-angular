import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from '../project-manager.service';

@Component({
  selector: 'app-pm-view-employee',
  templateUrl: './pm-view-employee.component.html',
  styleUrls: ['./pm-view-employee.component.css']
})
export class PmViewEmployeeComponent implements OnInit {
  viewEmployees:any
 constructor(private api:ProjectManagerService){}
  ngOnInit(): void {
    this.api.getemployees().subscribe((res:any)=>{
      this.viewEmployees = res
    })
  }

}
