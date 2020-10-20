import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{ServiceService}from '../service.service';
import{Employee}from'../model/employee';

@Component({
  selector: 'app-deleteemp',
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.css']
})
export class DeleteempComponent implements OnInit {

  constructor(private service: ServiceService) { }

  employee:Employee;
  remove(form:any){
    let data=form.value;
    let id=data.id;
    let observable:Observable<void>=this.service.remove(id);
    
  }

  ngOnInit(): void {
  }

}
