public class Main {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(10);

        manager.addEmployee(new Employee(101, "Alice", "Developer", 60000));
        manager.addEmployee(new Employee(102, "Bob", "Manager", 75000));
        manager.addEmployee(new Employee(103, "Charlie", "Tester", 50000));

        System.out.println("\nAll Employees:");
        manager.listEmployees();

        System.out.println("\nSearch for ID 102:");
        Employee found = manager.searchEmployee(102);
        System.out.println(found != null ? found : "Employee not found");

        System.out.println("\nDeleting employee with ID 101:");
        manager.deleteEmployee(101);

        System.out.println("\nAll Employees after deletion:");
        manager.listEmployees();
    }
}
