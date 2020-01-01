import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private s:OjasService,private r:Router,private ar:ActivatedRoute) { }
public empid;
  ngOnInit() {
    this.get_All()
    let id = this.ar.snapshot.params['id'];
    this.empid=id
  }
  result:any
get_All(){
  this.s.get_user().subscribe(resp=>{
    this.result=resp;
    console.log(this.result)
  })
}
onClick(id:number){
  this.r.navigate(['/empdetails', id],{queryParams:{name:'Brand','course':'technology'}});
}
}
