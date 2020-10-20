import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../app/model/employee'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl="http://localhost:8585/employee";

  constructor(private http:HttpClient) { }


  add(employee:Employee):Observable<Employee>{
    let url=this.baseUrl+"/add";   
    let observable:Observable<Employee>=this.http.post<Employee>(url,employee);
    return observable;
   }

   findbyid(id:number):Observable<Employee>{
       let url=this.baseUrl+"/find"+id;
       let observable:Observable<Employee>=this.http.get<Employee>(url);
       return observable;
   }
   findbyname(name:String):Observable<Employee>{
    let url=this.baseUrl+"/find"+name;
    let observable:Observable<Employee>=this.http.get<Employee>(url);
    return observable;
}

  findall():Observable<Employee[]>{
      let url=this.baseUrl+"findall";
      let observable:Observable<Employee[]>=this.http.get<Employee[]>(url);
      return observable;
  }

  remove(id:number):Observable<void>{
      let url=this.baseUrl+"/delete/"+id;
      let observable:Observable<void>=this.http.delete<void>(url);
      return observable;
  }
  
 

}
