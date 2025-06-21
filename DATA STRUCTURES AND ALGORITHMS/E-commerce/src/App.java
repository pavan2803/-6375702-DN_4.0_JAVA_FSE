import java.util.Arrays;

public class App {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Book", "Stationery"),
            new Product(104, "Phone", "Electronics")
        };

        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));

        String searchTerm = "Shoes";
        Product result1 = SearchFunctions.linearSearch(products, searchTerm);
        Product result2 = SearchFunctions.binarySearch(products, searchTerm);

        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not found"));
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not found"));
    }
}
