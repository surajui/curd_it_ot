import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';


const routes: Routes = [
  {path:'',component:MainComponent,pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'empdetails/:id',component:EmpdetailsComponent},
  { path: '',loadChildren: () => import('./suraj/suraj.module').then(m => m.SurajModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
