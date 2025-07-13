package com.example.employee.config;

import com.example.employee.model.Employee;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

@Configuration
public class EmployeeConfig {
    @Bean
    public List<Employee> employeeList() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");
        List<Employee> employees = (List<Employee>) context.getBean("employeeList");
        context.close();
        return employees;
    }
}
