package com.example.employee.controller;

import com.example.employee.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private List<Employee> employeeList;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeList;
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return employeeList.stream().filter(e -> e.getId() == id).findFirst().orElse(null);
    }
}
