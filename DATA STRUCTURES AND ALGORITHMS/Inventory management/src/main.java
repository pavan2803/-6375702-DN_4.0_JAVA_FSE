import java.util.HashMap;
import java.util.Map;

public class main {
    private static Map<Integer, product> inventory = new HashMap<>();

    public static void addProduct(product product) {
        if (inventory.containsKey(product.getProductId())) {
            System.out.println("Product ID already exists!");
            return;
        }
        inventory.put(product.getProductId(), product);
        System.out.println("Product added.");
    }

    public static void updateProduct(int productId, int quantity, double price) {
        if (!inventory.containsKey(productId)) {
            System.out.println("Product not found!");
            return;
        }
        product p = inventory.get(productId);
        p.setQuantity(quantity);
        p.setPrice(price);
        System.out.println("Product updated.");
    }

    public static void deleteProduct(int productId) {
        if (inventory.remove(productId) != null) {
            System.out.println("Product deleted.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public static void displayInventory() {
        if (inventory.isEmpty()) {
            System.out.println("Inventory is empty.");
        } else {
            for (product p : inventory.values()) {
                System.out.println(p);
            }
        }
    }

    public static void main(String[] args) {
        addProduct(new product(101, "Laptop", 10, 75000));
        addProduct(new product(102, "Mouse", 50, 500));
        displayInventory();
        
        updateProduct(102, 60, 550);
        deleteProduct(101);
        displayInventory();
    }
}
