package com.entreprise.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entreprise.model.Employee;
import com.entreprise.service.EmployeeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins= "http://localhost:3000")
//  http://localhost:8080/api/Employers
//  http://localhost:8080/api/EmployeeProperties
public class EmployeeRestController {

	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(value="/Employees", method=RequestMethod.GET)
	public List<Employee> getAllEmployees() {

		List<Employee> employees = employeeService.findAllEmployers();
		return employees;
		
	}
	
	@RequestMapping(value="/EmployeesByProp", method=RequestMethod.POST)
	public List<Employee> getDistinctEmployeesByProperty(@RequestParam("property") String property, @RequestBody() List<Employee> employees) {
		
		return employeeService.filterDistinctEmployeeByProperty(property, employees);
		
	}
	
	@RequestMapping(value="/EmployeeProperties", method=RequestMethod.GET)
	public List<String> getEmployeeProperties() {

		List<String> employeeProperties = employeeService.findEmployeeProperties();
		return employeeProperties;
		
	}
	
}
