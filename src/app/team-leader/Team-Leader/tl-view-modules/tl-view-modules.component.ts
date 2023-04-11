import { Component, OnInit } from '@angular/core';
import { TLServiceService } from '../tl-service.service';

@Component({
  selector: 'app-tl-view-modules',
  templateUrl: './tl-view-modules.component.html',
  styleUrls: ['./tl-view-modules.component.css']
})
export class TLViewModulesComponent implements OnInit{
 username :any
  viewModules :any

  constructor( private tlservice :TLServiceService){
   
  }
  ngOnInit(): void {
 
    let name = JSON.parse(localStorage.getItem('teamleader')!).username
  
    
   this.tlservice.tlviewModule(name).subscribe((res:any)=>{
    this.viewModules =res
    
    
   })
  }

}
