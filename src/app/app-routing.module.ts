import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddempComponent}from'./addemp/addemp.component';
import{FindbyidComponent}from'./findbyid/findbyid.component';
import{FindbynameComponent}from'./findbyname/findbyname.component';
import{ListallComponent}from'./listall/listall.component';
import{DeleteempComponent}from'./deleteemp/deleteemp.component';
const routes: Routes = [
  {
    path:'add-employee',
    component:AddempComponent
  },
  {
    path:'findbyid',
    component:FindbyidComponent
  },
  {
    path:'findbyname',
    component:FindbynameComponent
  },
  {
    path:'listall',
    component:ListallComponent
  },
  {
    path:'delete',
    component:DeleteempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
