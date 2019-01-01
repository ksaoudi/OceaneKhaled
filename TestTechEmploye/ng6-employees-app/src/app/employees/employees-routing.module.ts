import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesFilterComponent } from './filter-employees.component';

const employeesRoutes: Routes = [
	{
		path: 'employees',
		children: [
			{ path: 'all', component: EmployeesFilterComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(employeesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class EmployeesRoutingModule { }
