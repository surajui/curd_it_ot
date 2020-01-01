import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OjasService } from 'src/app/ojas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  constructor(private fb:FormBuilder,private s:OjasService,private r:Router) { }
   
   obj:any;
   obj1:any;
  //  @Input() sform:any[]
   @Output() add= new EventEmitter();
   //@Output() offdata = new EventEmitter();
   @Input() suraj;
  student=this.fb.group({
    id:['',Validators.required],
    fname:['',Validators.required],
    lname:['',Validators.required],
    uname:['',Validators.required],
    mobile:['',Validators.required],
    gender:['',Validators.required],
    course:['',Validators.required]
  })

  ngOnInit() {
  }
 
   onSubmit(){
   this.obj =this.student.value;
   this.add.emit(this.obj);
   console.log(this.student.value);
   this.student.reset();
   }
   update(){
     this.obj1 = this.student.value;
     //this.offdata.emit(this.obj1);
     console.log(this.student.value);
   }
}
