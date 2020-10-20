import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import{ServiceService}from '../service.service';
import{Employee}from'../model/employee';
@Component({
  selector: 'app-findbyid',
  templateUrl: './findbyid.component.html',
  styleUrls: ['./findbyid.component.css']
})
export class FindbyidComponent implements OnInit {

  constructor(private service: ServiceService) { }
  employee:Employee;


  findemployee(form:any){
    let data=form.value;
    let id=data.id;
    let observable:Observable<Employee>=this.service.findbyid(id);
    observable.subscribe(
      employeeArg=>{
        this.employee=employeeArg;
      },
 
      err=>{
        console.log("isnide find by id, err is "+err.message);
      }

    );
  }

  ngOnInit(): void {
  }

}
