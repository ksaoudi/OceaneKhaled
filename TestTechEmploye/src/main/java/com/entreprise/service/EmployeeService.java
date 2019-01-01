package com.entreprise.service;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entreprise.model.Employee;
import com.entreprise.repository.EmployeeRepository;


@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	
	
	public List<Employee> findAllEmployers(){
		return employeeRepository.findAll();
	}
	
	public List<Employee> filterDistinctEmployeeByProperty(String property, List<Employee> employees){
		
        List<Employee> distinctEmployees = new ArrayList<>();
		
		employees.stream().filter(distinctByKey(b -> {
			try {
				Field field = b.getClass().getDeclaredField(property);
				field.setAccessible(true);
				return field.get(b);
			} catch (IllegalArgumentException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			} catch (NoSuchFieldException e) {
				e.printStackTrace();
			} catch (SecurityException e) {
				e.printStackTrace();
			}
			return b;
		})).forEach(b -> distinctEmployees.add(b));
		
		return distinctEmployees;
		
	}
	
	public List<String> findEmployeeProperties(){
		List<String> employeeProperties = new ArrayList<>();
		Field[] employeeFields = new Employee().getClass().getDeclaredFields();
		for (Field field : employeeFields) {
			if(!field.getName().equals("id")) {
			   employeeProperties.add(field.getName());
			}
		}
		return employeeProperties;
	}
	
	private static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
        Map<Object,Boolean> seen = new ConcurrentHashMap<>();
        return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }
}
