import { Component, OnInit } from '@angular/core';
import { DevService } from '../dev.service';

@Component({
  selector: 'app-dev-viewtask',
  templateUrl: './dev-viewtask.component.html',
  styleUrls: ['./dev-viewtask.component.css']
})
export class DevViewtaskComponent implements OnInit {
viewTask:any
  constructor( private devservice:DevService){}
  ngOnInit(): void {

    let name = JSON.parse(localStorage.getItem('developer')!).username

    this.devservice.DlviewTask(name).subscribe((res:any)=>{
    this.viewTask =res
    console.log(res);
    
   })
  }
}
