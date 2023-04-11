import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './home/admindashboard.component';
import { DevloperComponent } from './devloper/devloper.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { RegisterEmployeeComponent } from './admin/register-employee/register-employee.component';
import { ViewEmployeesComponent } from './admin/view-employees/view-employees.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ViewProjectsComponent } from './admin/view-projects/view-projects.component';
import { ProManagerLoginComponent } from './Project-manager/pro-manager-login/pro-manager-login.component';
import { ProManagerDashboardComponent } from './Project-manager/pro-manager-dashboard/pro-manager-dashboard.component';
import { ProfileComponent } from './Project-manager/profile/profile.component';
import { AddModuleComponent } from './Project-manager/add-module/add-module.component';
import { ViewModulesComponent } from './Project-manager/view-modules/view-modules.component';
import { PmViewProjectComponent } from './Project-manager/pm-view-project/pm-view-project.component';
import { PmViewEmployeeComponent } from './Project-manager/pm-view-employee/pm-view-employee.component';
import { AdmimChangePwdComponent } from './admin/admim-change-pwd/admim-change-pwd.component';
import { TLDashboardComponent } from './team-leader/Team-Leader/tl-dashboard/tl-dashboard.component';
import { TLProfileComponent } from './team-leader/Team-Leader/tl-profile/tl-profile.component';
import { TLViewEmployeesComponent } from './team-leader/Team-Leader/tl-view-employees/tl-view-employees.component';
import { TLAddtaskComponent } from './team-leader/Team-Leader/tl-addtask/tl-addtask.component';
import { TLViewtaskComponent } from './team-leader/Team-Leader/tl-viewtask/tl-viewtask.component';
import { TLViewModulesComponent } from './team-leader/Team-Leader/tl-view-modules/tl-view-modules.component';
import { DevDashboardComponent } from './Devloper-/dev-dashboard/dev-dashboard.component';
import { DevProfileComponent } from './Devloper-/dev-profile/dev-profile.component';
import { DevViewtaskComponent } from './Devloper-/dev-viewtask/dev-viewtask.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'admin',component:AdminComponent, },
  { path:'adminpage',component:AdminPageComponent,children:[
    { path:'registeremployees',component:RegisterEmployeeComponent},
    { path:'viewemployees',component:ViewEmployeesComponent},
    { path:'addproject',component:AddProjectComponent},
    { path:'viewproject',component:ViewProjectsComponent},
    { path:'adminchangepwd',component:AdmimChangePwdComponent}
    
  ]},


  { path:'home',component:AdmindashboardComponent, children:[
    { path:'admin',component:AdminComponent},
    { path:'projectmanager',component:ProManagerLoginComponent},
    { path:'teamleader',component:TeamLeaderComponent},
    { path:'devloper',component:DevloperComponent}
  ]},
  { path:'projectmanagerdashboard',component:ProManagerDashboardComponent, children:[
     { path:'profile',component:ProfileComponent },
     { path:'pmviewemployee',component:PmViewEmployeeComponent },
     { path:'addmodule',component:AddModuleComponent },
     { path:'pmviewproject',component:PmViewProjectComponent },
     { path:'viewmodules',component:ViewModulesComponent },
     
  ]},
  { path:'tldashboard',component:TLDashboardComponent, children:[
    { path:'tlprofile',component:TLProfileComponent},
    { path:'tlviewemployees',component:TLViewEmployeesComponent},
    { path:'tladdtask',component:TLAddtaskComponent},
    { path:'tlviewtask',component:TLViewtaskComponent},
    { path:'tlviewmodule',component:TLViewModulesComponent},
  ]},
  { path:'devdashboard',component:DevDashboardComponent, children:[
    { path:'devprofile',component:DevProfileComponent},
    { path:'devviewtask',component:DevViewtaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
