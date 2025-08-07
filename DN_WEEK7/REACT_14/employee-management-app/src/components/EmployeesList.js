import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeesList = () => {
  const employees = [
    { id: 1, name: 'John Doe', designation: 'Developer' },
    { id: 2, name: 'Jane Smith', designation: 'Designer' },
    { id: 3, name: 'Alice Johnson', designation: 'Tester' }
  ];

  return (
    <div className="employee-list">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeesList;
