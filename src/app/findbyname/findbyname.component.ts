import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{ServiceService}from '../service.service';
import{Employee}from'../model/employee';

@Component({
  selector: 'app-findbyname',
  templateUrl: './findbyname.component.html',
  styleUrls: ['./findbyname.component.css']
})
export class FindbynameComponent implements OnInit {

  constructor(private service: ServiceService) { }
  employee:Employee;


  findemployee(form:any){
    let data=form.value;
    let name=data.name;
    let observable:Observable<Employee>=this.service.findbyname(name);
    observable.subscribe(
      employeeArg=>{
        this.employee=employeeArg;
      },
 
      err=>{
        console.log("isnide find by name, err is "+err.message);
      }

    );
  }

  ngOnInit(): void {
  }

}
