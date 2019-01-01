import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmployeesService {

    employeesUrl = "http://localhost:8080/api";

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
      let headers = new HttpHeaders();

      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Access-Control-Allow-Headers",
          "origin, content-type, accept, authorization");
      headers.append("Access-Control-Allow-Credentials", "true");
      headers.append("Access-Control-Allow-Methods",
          "GET, POST, PUT");

      const  httpOptions = {headers: headers};


      const url = `${this.employeesUrl}/Employees`;
      return this.http.get<Employee[]>(url, httpOptions);

    }

    getFilteredEmployees(filterProp: string, employees: Array<Employee>): Observable<Employee[]> {

      let headers = new HttpHeaders();

      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Access-Control-Allow-Headers",
          "origin, content-type, accept, authorization");
      headers.append("Access-Control-Allow-Credentials", "true");
      headers.append("Access-Control-Allow-Methods",
          "GET, POST, PUT");
      headers.append("Content-Type", "application/json");

      let  httpParams = new HttpParams();
      httpParams = httpParams.append("property", filterProp);


      const  httpOptions = {headers: headers, params: httpParams};

      const url = `${this.employeesUrl}/EmployeesByProp`;
      return this.http.post<Employee[]>(url, employees ,httpOptions);

    }

    getEmployeeProperties(): Observable<string[]> {

      let headers = new HttpHeaders();

      headers.append("Access-Control-Allow-Origin", "*");
      headers.append("Access-Control-Allow-Headers",
          "origin, content-type, accept, authorization");
      headers.append("Access-Control-Allow-Credentials", "true");
      headers.append("Access-Control-Allow-Methods",
          "GET, POST, PUT");


      const  httpOptions = {headers: headers};
      const url = `${this.employeesUrl}/EmployeeProperties`;

      return this.http.get<string[]>(url, httpOptions);

    }






}
