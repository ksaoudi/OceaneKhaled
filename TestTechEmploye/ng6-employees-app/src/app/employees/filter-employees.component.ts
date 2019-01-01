import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { EmployeesService } from './employees.service';
import { Employee } from './employee';

@Component({
	selector: 'employees-filter',
	templateUrl: './app/employees/filter-employees.component.html',
	styleUrls: ['./app/employees/filter-employees.component.css'],
	providers: [EmployeesService],
})
export class EmployeesFilterComponent implements OnInit {

     private employeeProps: Array<string>;
		 private employees: Array<Employee>;
		 private allEmployees: Array<Employee>;
		 private selectedProp: string;


	constructor(private employeesService: EmployeesService, private router: Router) { }


    ngOnInit() {

			this.employeesService.getEmployeeProperties().subscribe(employeeProps => this.employeeProps = employeeProps);

			this.employeesService.getEmployees().subscribe(employees => {this.employees = employees;   this.allEmployees = employees});

  	}

		filterOnClick(){
			this.employeesService.getFilteredEmployees(this.selectedProp, this.allEmployees).subscribe(employees => this.employees = employees)
		}

		resetOnClick(){
				this.employeesService.getEmployees().subscribe(employees => {this.employees = employees;   this.allEmployees = employees});
		}


}
