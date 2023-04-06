import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
viewEmployees:any
  constructor(private adminservice:AdminService){}
  ngOnInit(): void {
    this.adminservice.getEmlpoyees().subscribe((res:any)=>{
    this.viewEmployees=res      
    })
  }


}
