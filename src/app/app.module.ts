import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeeComponent,
    EmpdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('this is app module')
  }
}
