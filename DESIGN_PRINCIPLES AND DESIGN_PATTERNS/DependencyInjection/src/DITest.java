public class DITest {
    public static void main(String[] args) {
        CustomerRepository repo = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repo);

        String customerId = "C001";
        Customer customer = service.getCustomerById(customerId);

        if (customer != null) {
            System.out.println("Found: " + customer);
        } else {
            System.out.println("Customer with ID " + customerId + " not found.");
        }
    }
}
