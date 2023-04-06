import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-pro-manager-login',
  templateUrl: './pro-manager-login.component.html',
  styleUrls: ['./pro-manager-login.component.css']
})
export class ProManagerLoginComponent {
  constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) { }

  Pmlogin = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    pwd: ['', [Validators.required, Validators.minLength(4)]],
    role: ['Project Manager'],

  });
  ngOnInit(): void { }
  get userName() {
    return this.Pmlogin.get('userName')
  }
  get pwd() {
    return this.Pmlogin.get('pwd')
  }
  
  submit() {
    this.adminService.Pmlogin(this.Pmlogin.value.userName, this.Pmlogin.value.pwd, this.Pmlogin.value.role).subscribe((res: any) => {
      if (res) {
        alert('login success')
        localStorage.setItem('token', JSON.stringify(res))
        this.router.navigate(['/projectmanagerdashboard'])
      } else {
        alert('login failed')
      }
    })

  }
}
