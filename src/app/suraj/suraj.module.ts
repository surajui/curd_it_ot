import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { StudentComponent } from './student/student.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
 {path:'master',component:MasterComponent},
 {path:'student',component:StudentComponent}
];

@NgModule({
  declarations: [MasterComponent, StudentComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class SurajModule {
  constructor(){
    console.log("this is suraj module")
  }
 }
