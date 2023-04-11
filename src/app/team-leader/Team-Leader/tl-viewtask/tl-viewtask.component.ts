import { Component, OnInit } from '@angular/core';
import { TLServiceService } from '../tl-service.service';

@Component({
  selector: 'app-tl-viewtask',
  templateUrl: './tl-viewtask.component.html',
  styleUrls: ['./tl-viewtask.component.css']
})
export class TLViewtaskComponent implements OnInit{
viewtask:any
  constructor(private tlservice:TLServiceService){}
  ngOnInit(): void {
   this.tlservice.viewTask().subscribe((res:any)=>{
    this.viewtask = res
   })
  }

}
