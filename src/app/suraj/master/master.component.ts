import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OjasService } from 'src/app/ojas.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  result:any = [];
  constructor(private s:OjasService) { }
  neelu="neelima"
  @ViewChild(StudentComponent,{static:false})
  st:StudentComponent;


  ngOnInit() {
    this.get_All()
  }

  get_All(){
this.s.all_user().subscribe(resp=>{
  this.result=resp
  console.log(this.result);
})
  }
  addUser(event){
this.s.new_user(event).subscribe(resp=>{
  console.log(resp);
  this.get_All()
})
  }
  delete(s){
    this.s.del_user(s.id).subscribe(resp=>{
      console.log(resp)
      this.get_All();
    })
  }
  edit(s){
 this.st.student.setValue({
   id:s.id,
   fname:s.fname,
   lname:s.lname,
   uname:s.uname,
   mobile:s.mobile,
   gender:s.gender,
   course:s.course
 })
  }
  update(){
    this.s.up_user(this.st.student.value).subscribe(resp=>{
      console.log(resp);
      this.get_All();
    })
    
  }
  ab="my name suraj"
}
