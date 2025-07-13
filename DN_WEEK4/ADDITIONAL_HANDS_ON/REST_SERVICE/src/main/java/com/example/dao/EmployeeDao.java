package com.example.dao;

import com.example.model.Department;
import com.example.model.Employee;
import com.example.model.Skill;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;

@Repository
public class EmployeeDao {

    public ArrayList<Employee> getAllEmployees() {
        Department it = new Department();
        it.setId(101);
        it.setName("IT");

        Department hr = new Department();
        hr.setId(102);
        hr.setName("HR");

        Department finance = new Department();
        finance.setId(103);
        finance.setName("Finance");

        Skill java = new Skill(); java.setName("Java");
        Skill angular = new Skill(); angular.setName("Angular");
        Skill sql = new Skill(); sql.setName("SQL");

        Employee e1 = new Employee();
        e1.setId(1); e1.setName("Alice Johnson");
        e1.setDepartment(it);
        e1.setSkills(Arrays.asList(java, angular));

        Employee e2 = new Employee();
        e2.setId(2); e2.setName("Bob Smith");
        e2.setDepartment(hr);
        e2.setSkills(Arrays.asList(sql));

        Employee e3 = new Employee();
        e3.setId(3); e3.setName("Catherine Green");
        e3.setDepartment(finance);
        e3.setSkills(Arrays.asList(angular));

        Employee e4 = new Employee();
        e4.setId(4); e4.setName("David Lee");
        e4.setDepartment(it);
        e4.setSkills(Arrays.asList(java, sql));

        return new ArrayList<>(Arrays.asList(e1, e2, e3, e4));
    }
}