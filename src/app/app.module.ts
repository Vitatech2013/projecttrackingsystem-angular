import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './home/admindashboard.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { DevloperComponent } from './devloper/devloper.component';
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
import { PmViewEmployeeComponent } from './Project-manager/pm-view-employee/pm-view-employee.component';
import { PmViewProjectComponent } from './Project-manager/pm-view-project/pm-view-project.component';
import { AdmimChangePwdComponent } from './admin/admim-change-pwd/admim-change-pwd.component';
import { TLProfileComponent } from './team-leader/Team-Leader/tl-profile/tl-profile.component';
import { TLViewEmployeesComponent } from './team-leader/Team-Leader/tl-view-employees/tl-view-employees.component';
import { TLAddtaskComponent } from './team-leader/Team-Leader/tl-addtask/tl-addtask.component';
import { TLViewtaskComponent } from './team-leader/Team-Leader/tl-viewtask/tl-viewtask.component';
import { TLViewModulesComponent } from './team-leader/Team-Leader/tl-view-modules/tl-view-modules.component';
import { TLDashboardComponent } from './team-leader/Team-Leader/tl-dashboard/tl-dashboard.component';
import { DevProfileComponent } from './Devloper-/dev-profile/dev-profile.component';
import { DevViewtaskComponent } from './Devloper-/dev-viewtask/dev-viewtask.component';
import { DevDashboardComponent } from './Devloper-/dev-dashboard/dev-dashboard.component';
import { DevLoginComponent } from './Devloper-/dev-login/dev-login.component';
import { EditEmployeeComponent } from './admin/edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    AdmindashboardComponent,
    TeamLeaderComponent,
    DevloperComponent,
    AdminPageComponent,
    RegisterEmployeeComponent,
    ViewEmployeesComponent,
    AddProjectComponent,
    ViewProjectsComponent,
    ProManagerLoginComponent,
    ProManagerDashboardComponent,
    ProfileComponent,
    AddModuleComponent,
    ViewModulesComponent,
    PmViewEmployeeComponent,
    PmViewProjectComponent, 
    AdmimChangePwdComponent, TLProfileComponent, TLViewEmployeesComponent, TLAddtaskComponent, TLViewtaskComponent, TLViewModulesComponent, TLDashboardComponent, DevProfileComponent, DevViewtaskComponent, DevDashboardComponent, DevLoginComponent, EditEmployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
