import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import{ServiceService}from '../service.service';
import{Employee}from'../model/employee';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor(private service: ServiceService) { }
  employee :Employee;
  addEmployee(form: any) {
    let data = form.value;
     let name = data.name;
     let age=data.age;
    this.employee = new Employee(-1, name,age);

    
    let successFun = (testArg: Employee) => {
      this.employee = testArg;
    };
   
    let errFun = err => {
      console.log("err in addemployeecomponent " + err.message);
    }

    let observable: Observable<Employee> = this.service.add(this.employee);
    observable.subscribe(successFun, errFun);
  }

  ngOnInit(): void {
  }

}
