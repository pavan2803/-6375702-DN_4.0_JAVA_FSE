public class AdapterTest {
    public static void main(String[] args) {
        PaymentProcessor paypalProcessor = new PayPalAdapter();
        paypalProcessor.processPayment(150.75);

        PaymentProcessor stripeProcessor = new StripeAdapter();
        stripeProcessor.processPayment(220.50);
    }
}
