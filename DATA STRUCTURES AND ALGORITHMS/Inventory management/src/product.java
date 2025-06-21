public class product {
    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public product(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String toString() {
        return "ProductID: " + productId + ", Name: " + productName +
               ", Quantity: " + quantity + ", Price: " + price;
    }
}
