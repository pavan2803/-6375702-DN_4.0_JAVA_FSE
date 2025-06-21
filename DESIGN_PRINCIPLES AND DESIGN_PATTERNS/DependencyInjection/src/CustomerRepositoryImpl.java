import java.util.HashMap;
import java.util.Map;

public class CustomerRepositoryImpl implements CustomerRepository {
    private Map<String, Customer> dataStore = new HashMap<>();

    public CustomerRepositoryImpl() {
        dataStore.put("C001", new Customer("C001", "Alice", "alice@example.com"));
        dataStore.put("C002", new Customer("C002", "Bob", "bob@example.com"));
    }

    @Override
    public Customer findCustomerById(String id) {
        return dataStore.get(id);
    }
}
