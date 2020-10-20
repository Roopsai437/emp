import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { ListallComponent } from './listall/listall.component';
import { FindbynameComponent } from './findbyname/findbyname.component';
import { FindbyidComponent } from './findbyid/findbyid.component';
import { ServiceService } from './service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
  
    AddempComponent,
    DeleteempComponent,
    ListallComponent,
    FindbynameComponent,
    FindbyidComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
   
  ],
  providers: [ServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
