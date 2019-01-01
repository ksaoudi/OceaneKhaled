import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesFilterComponent } from './filter-employees.component';

import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
    EmployeesRoutingModule
	],
	declarations: [
		EmployeesFilterComponent
	],
	providers: []
})
export class EmployeesModule { }
