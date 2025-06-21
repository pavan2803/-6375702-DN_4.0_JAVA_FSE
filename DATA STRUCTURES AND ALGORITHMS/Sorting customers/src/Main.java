public class Main {
    public static void main(String[] args) {
        Order[] orders = {
            new Order(101, "Alice", 4500),
            new Order(102, "Bob", 1200),
            new Order(103, "Charlie", 8900),
            new Order(104, "Daisy", 3200),
            new Order(105, "Evan", 2500)
        };

        System.out.println("Original Orders:");
        printOrders(orders);

        SortAlgorithms.bubbleSort(orders);
        System.out.println("\nOrders sorted using Bubble Sort:");
        printOrders(orders);

        orders = new Order[]{
            new Order(101, "Alice", 4500),
            new Order(102, "Bob", 1200),
            new Order(103, "Charlie", 8900),
            new Order(104, "Daisy", 3200),
            new Order(105, "Evan", 2500)
        };

        SortAlgorithms.quickSort(orders, 0, orders.length - 1);
        System.out.println("\nOrders sorted using Quick Sort:");
        printOrders(orders);
    }

    public static void printOrders(Order[] orders) {
        for (Order o : orders) {
            System.out.println(o);
        }
    }
}
