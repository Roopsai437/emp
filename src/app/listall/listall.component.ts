import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{ServiceService}from '../service.service';
import{Employee}from'../model/employee';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {
  emploies:Employee[];
  constructor(private service: ServiceService) {
    let observable:Observable<Employee[]>=service.findall();
    observable.subscribe(
      (employeeArr:Employee[])=>this.emploies=employeeArr
      ,
      err=>{
        console.log("inside Employee ListComponent err is "+err.message);
      }

    );   
   }
 

  ngOnInit(): void {
  }

}
