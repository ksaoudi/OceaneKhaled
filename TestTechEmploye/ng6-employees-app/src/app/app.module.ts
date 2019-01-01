import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeesModule } from './employees/employees.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpClientModule,
                  EmployeesModule,
                  AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
