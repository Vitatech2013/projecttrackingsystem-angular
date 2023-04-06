import { Component, OnInit } from '@angular/core';
import { TLServiceService } from '../tl-service.service';

@Component({
  selector: 'app-tl-view-employees',
  templateUrl: './tl-view-employees.component.html',
  styleUrls: ['./tl-view-employees.component.css']
})
export class TLViewEmployeesComponent implements OnInit {
  
  viewEmployees:any

  constructor( private TLservice :TLServiceService){}
  ngOnInit(): void {
  this.TLservice.getEmployees().subscribe((res:any)=>{
    this.viewEmployees = res
    console.log(this.viewEmployees,'ve');
    
  })
  }

}
